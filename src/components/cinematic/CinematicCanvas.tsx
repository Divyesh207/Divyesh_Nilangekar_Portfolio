import React, { useRef, useEffect } from 'react';

interface CinematicCanvasProps {
  sceneId: number; // 1 to 7
  sceneProgress: number; // 0.0 to 1.0 within the current scene
  getFrame: (sceneId: number, frameNum: number) => HTMLImageElement | null;
  className?: string;
}

export const CinematicCanvas: React.FC<CinematicCanvasProps> = ({
  sceneId,
  sceneProgress,
  getFrame,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetFrameRef = useRef<number>(1);
  const currentFrameRef = useRef<number>(1);
  const rafIdRef = useRef<number | null>(null);

  // Map 0..1 scene progress to 1..300 frame number
  useEffect(() => {
    const targetFrame = Math.max(1, Math.min(300, Math.round(sceneProgress * 299) + 1));
    targetFrameRef.current = targetFrame;
  }, [sceneProgress]);

  // Main render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      // Smooth lerp between currentFrame and targetFrame for cinematic feel
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.35;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const frameToDraw = Math.round(currentFrameRef.current);
      const img = getFrame(sceneId, frameToDraw);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Background fill
      ctx.fillStyle = '#07090e';
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      if (img && img.complete && img.naturalWidth > 0) {
        const imageAspect = 16 / 9; // 1920x1080 & 1280x720 are exactly 16:9
        const containerAspect = displayWidth / displayHeight;

        let renderWidth: number;
        let renderHeight: number;
        let offsetX: number;
        let offsetY: number;

        // Intelligent 16:9 Preservation:
        // On widescreen, contain full height and center horizontally with cinema bars.
        // On mobile portrait, contain full width and center vertically, or gracefully fit.
        if (containerAspect > imageAspect) {
          // Container is wider than 16:9 (e.g. ultra-wide)
          renderHeight = displayHeight;
          renderWidth = displayHeight * imageAspect;
          offsetX = (displayWidth - renderWidth) / 2;
          offsetY = 0;
        } else {
          // Container is taller than 16:9 (e.g. mobile/tablet portrait or standard desktop)
          // To preserve full 16:9 composition without cutting off critical UI or faces:
          renderWidth = displayWidth;
          renderHeight = displayWidth / imageAspect;
          offsetX = 0;
          offsetY = (displayHeight - renderHeight) / 2;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      }

      ctx.restore();

      rafIdRef.current = requestAnimationFrame(render);
    };

    rafIdRef.current = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [sceneId, getFrame]);

  return (
    <div className={`relative w-full h-full bg-background flex items-center justify-center overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
};

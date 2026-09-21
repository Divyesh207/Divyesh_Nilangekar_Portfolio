import { useEffect, useRef, useState, useCallback } from 'react';

// Format frame number: 1 -> "ezgif-frame-001.jpg"
export const formatFrameFileName = (frameNum: number): string => {
  const padded = String(Math.max(1, Math.min(300, frameNum))).padStart(3, '0');
  return `ezgif-frame-${padded}.jpg`;
};

export const getFrameUrl = (sceneId: number, frameNum: number): string => {
  const folder = `video-0${sceneId}`;
  return `/frames/${folder}/${formatFrameFileName(frameNum)}`;
};

interface PreloaderOptions {
  activeScene: number; // 1 to 7
  totalScenes?: number;
  initialPreloadFrames?: number; // how many frames to load initially
}

export function useFramePreloader({ activeScene, totalScenes = 7, initialPreloadFrames = 60 }: PreloaderOptions) {
  const cacheRef = useRef<Map<string, HTMLImageElement>>(new Map());
  const loadingSetRef = useRef<Set<string>>(new Set());
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isInitialReady, setIsInitialReady] = useState<boolean>(false);

  // Helper to load a single image
  const preloadSingleFrame = useCallback((sceneId: number, frameNum: number): Promise<HTMLImageElement> => {
    const key = `${sceneId}-${frameNum}`;
    const cached = cacheRef.current.get(key);
    if (cached) return Promise.resolve(cached);

    if (loadingSetRef.current.has(key)) {
      return new Promise((resolve) => {
        const check = () => {
          const img = cacheRef.current.get(key);
          if (img) resolve(img);
          else setTimeout(check, 30);
        };
        check();
      });
    }

    loadingSetRef.current.add(key);
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = getFrameUrl(sceneId, frameNum);
      img.onload = () => {
        cacheRef.current.set(key, img);
        loadingSetRef.current.delete(key);
        setLoadedCount((prev) => prev + 1);
        resolve(img);
      };
      img.onerror = () => {
        loadingSetRef.current.delete(key);
        reject(new Error(`Failed to load ${img.src}`));
      };
    });
  }, []);

  // Initial load for Scene 1 (priority first frames)
  useEffect(() => {
    let isMounted = true;
    const initialPromises: Promise<HTMLImageElement>[] = [];

    // Load key frames of Scene 1 (e.g. step by 2 or first N frames)
    for (let i = 1; i <= Math.min(300, initialPreloadFrames); i++) {
      initialPromises.push(preloadSingleFrame(1, i));
    }

    Promise.allSettled(initialPromises).then(() => {
      if (isMounted) {
        setIsInitialReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [initialPreloadFrames, preloadSingleFrame]);

  // Progressive background loader for active scene and neighboring scenes
  useEffect(() => {
    let isMounted = true;

    // Preload rest of current scene in chunks
    const loadSceneFrames = async (sceneId: number) => {
      for (let i = 1; i <= 300; i += 2) {
        if (!isMounted) break;
        const key = `${sceneId}-${i}`;
        if (!cacheRef.current.has(key)) {
          try {
            await preloadSingleFrame(sceneId, i);
          } catch {
            // ignore frame error
          }
        }
      }
      // Fill odd frames
      for (let i = 2; i <= 300; i += 2) {
        if (!isMounted) break;
        const key = `${sceneId}-${i}`;
        if (!cacheRef.current.has(key)) {
          try {
            await preloadSingleFrame(sceneId, i);
          } catch {
            // ignore frame error
          }
        }
      }
    };

    // Load active scene first
    loadSceneFrames(activeScene).then(() => {
      // Then preload next scene if available
      if (isMounted && activeScene < totalScenes) {
        loadSceneFrames(activeScene + 1);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [activeScene, totalScenes, preloadSingleFrame]);

  // Retrieve cached image or closest available frame
  const getFrame = useCallback((sceneId: number, frameNum: number): HTMLImageElement | null => {
    const clamped = Math.max(1, Math.min(300, Math.round(frameNum)));
    const directKey = `${sceneId}-${clamped}`;
    const direct = cacheRef.current.get(directKey);
    if (direct) return direct;

    // Find nearest cached frame in this scene
    let bestImg: HTMLImageElement | null = null;

    for (let delta = 1; delta <= 30; delta++) {
      const upKey = `${sceneId}-${clamped + delta}`;
      const downKey = `${sceneId}-${clamped - delta}`;
      if (cacheRef.current.has(upKey)) {
        bestImg = cacheRef.current.get(upKey) || null;
        break;
      }
      if (cacheRef.current.has(downKey)) {
        bestImg = cacheRef.current.get(downKey) || null;
        break;
      }
    }

    // Trigger on-demand load of this frame if not already loaded
    if (!loadingSetRef.current.has(directKey)) {
      preloadSingleFrame(sceneId, clamped).catch(() => {});
    }

    return bestImg;
  }, [preloadSingleFrame]);

  return {
    getFrame,
    isInitialReady,
    loadedCount,
  };
}

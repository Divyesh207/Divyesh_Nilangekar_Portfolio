import React, { useRef, useState, useEffect, useCallback } from 'react';
import { CinematicCanvas } from '../cinematic/CinematicCanvas';
import { CinematicOverlays } from '../cinematic/CinematicOverlays';
import { CinematicControls } from '../cinematic/CinematicControls';
import { useFramePreloader } from '../../hooks/useFramePreloader';
import { CINEMATIC_SCENES } from '../../data/cinematicScenes';

interface Act1CinematicStoryProps {
  onStoryComplete: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenMenu: () => void;
  targetSceneRequest?: number | null;
  onClearSceneRequest?: () => void;
}

export const Act1CinematicStory: React.FC<Act1CinematicStoryProps> = ({
  onStoryComplete,
  onNavigateSection,
  onOpenMenu,
  targetSceneRequest,
  onClearSceneRequest,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [globalProgress, setGlobalProgress] = useState<number>(0);
  const [activeScene, setActiveScene] = useState<number>(1);
  const [sceneProgress, setSceneProgress] = useState<number>(0);

  const { getFrame } = useFramePreloader({
    activeScene,
    totalScenes: CINEMATIC_SCENES.length,
    initialPreloadFrames: 60,
  });

  // Calculate active scene and local scene progress from global progress
  const updateProgressFromScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const totalScrollable = container.scrollHeight - window.innerHeight;

    if (totalScrollable <= 0) return;

    // How far through the container have we scrolled (0.0 to 1.0)
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
    setGlobalProgress(progress);

    // Map global progress to active scene
    // There are 7 scenes, each occupying 1/7 of total progress
    const sceneFraction = 1 / CINEMATIC_SCENES.length;
    const rawSceneIdx = progress / sceneFraction;
    const sceneIndex = Math.min(CINEMATIC_SCENES.length - 1, Math.floor(rawSceneIdx));
    const currentSceneId = sceneIndex + 1;

    const localProg = (progress - sceneIndex * sceneFraction) / sceneFraction;
    const clampedLocalProg = Math.max(0, Math.min(1, localProg));

    setActiveScene(currentSceneId);
    setSceneProgress(clampedLocalProg);

    // If reached the end of Scene 7
    if (progress >= 0.99) {
      onStoryComplete();
    }
  }, [onStoryComplete]);

  // Scroll listener
  useEffect(() => {
    window.addEventListener('scroll', updateProgressFromScroll, { passive: true });
    updateProgressFromScroll();

    return () => {
      window.removeEventListener('scroll', updateProgressFromScroll);
    };
  }, [updateProgressFromScroll]);

  // Handle programmatic jump to scene
  const handleJumpToScene = useCallback((sceneId: number) => {
    const container = containerRef.current;
    if (!container) return;

    const sceneFraction = 1 / CINEMATIC_SCENES.length;
    const targetProgress = (sceneId - 1) * sceneFraction + 0.01;
    const totalScrollable = container.scrollHeight - window.innerHeight;
    const targetScrollY = container.offsetTop + targetProgress * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  }, []);

  // Handle external scene requests (e.g. from menu drawer)
  useEffect(() => {
    if (targetSceneRequest && targetSceneRequest >= 1 && targetSceneRequest <= 7) {
      handleJumpToScene(targetSceneRequest);
      if (onClearSceneRequest) onClearSceneRequest();
    }
  }, [targetSceneRequest, handleJumpToScene, onClearSceneRequest]);

  return (
    <div
      ref={containerRef}
      id="act1-cinematic"
      className="relative w-full bg-background"
      style={{
        // Height allows 7 scenes * 100vh = 700vh total scrub track
        height: `${CINEMATIC_SCENES.length * 100}vh`,
      }}
    >
      {/* Sticky Fullscreen Cinematic Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-background">
        {/* HTML5 Canvas Frame Engine */}
        <CinematicCanvas
          sceneId={activeScene}
          sceneProgress={sceneProgress}
          getFrame={getFrame}
        />

        {/* Dynamic HTML/CSS Text Overlays */}
        <CinematicOverlays
          sceneId={activeScene}
          sceneProgress={sceneProgress}
          onNavigateSection={onNavigateSection}
        />

        {/* Minimal Controls & Scene Indicator */}
        <CinematicControls
          activeScene={activeScene}
          totalScenes={CINEMATIC_SCENES.length}
          globalProgress={globalProgress}
          onSkipToPortfolio={() => onNavigateSection('about')}
          onJumpToScene={handleJumpToScene}
          onOpenMenu={onOpenMenu}
        />
      </div>
    </div>
  );
};

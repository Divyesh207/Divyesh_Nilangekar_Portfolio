import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: {
    url: string;
    caption?: string;
  }[];
  initialIndex?: number;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  title,
  images,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#0b0f17] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div>
            <span className="font-mono text-[10px] text-accent-blue tracking-widest uppercase block">
              PREVIEW {images.length > 1 ? `(${currentIndex + 1} / ${images.length})` : ''}
            </span>
            <h3 className="text-sm md:text-base font-semibold text-white tracking-tight">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={currentImage.url}
              target="_blank"
              rel="noreferrer"
              title="Open full resolution image in new tab"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 flex items-center justify-center p-4 md:p-6 bg-black/60 overflow-hidden min-h-[300px]">
          <img
            src={currentImage.url}
            alt={currentImage.caption || title}
            className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-lg"
          />

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-white transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-white transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Caption & Thumbnails */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs md:text-sm text-slate-300 font-mono">
            {currentImage.caption || title}
          </p>

          {images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
              {images.map((img, idx) => (
                <button
                  key={img.url}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-12 h-8 rounded border overflow-hidden transition-all flex-shrink-0 ${
                    idx === currentIndex
                      ? 'border-accent-blue scale-105 shadow-md shadow-accent-blue/20'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X, ZoomIn } from "lucide-react";

export interface ScreenshotItem {
  src: string;
  alt: string;
}

interface ScreenshotGalleryProps {
  images: ScreenshotItem[];
  accent?: "blue" | "purple";
}

export function ScreenshotGallery({ images, accent = "blue" }: ScreenshotGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const borderColor = accent === "blue" ? "border-accent-blue/20" : "border-accent-purple/20";
  const hoverBorder = accent === "blue" ? "hover:border-accent-blue/40" : "hover:border-accent-purple/40";
  const overlayAccent = accent === "blue" ? "bg-accent-blue/80" : "bg-accent-purple/80";

  return (
    <>
      <div className={cn(
        "grid gap-3 mt-4",
        images.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
      )}>
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            onClick={() => setLightbox(i)}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-lg border bg-dark-900/50 transition-all duration-200",
              borderColor,
              hoverBorder
            )}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-dark-900/0 transition-all duration-200 group-hover:bg-dark-900/40">
              <div className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white opacity-0 transition-all duration-200 group-hover:opacity-100",
                overlayAccent
              )}>
                <ZoomIn className="h-3.5 w-3.5" />
                Vergr\u00f6\u00dfern
              </div>
            </div>
            {/* Caption */}
            <div className="px-3 py-2 text-xs text-text-muted text-left">
              {img.alt}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-glass-border bg-dark-800/80 text-text-muted transition-colors hover:text-text-primary"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation arrows for multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(lightbox > 0 ? lightbox - 1 : images.length - 1);
                  }}
                  className="absolute left-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-glass-border bg-dark-800/80 text-text-muted transition-colors hover:text-text-primary"
                >
                  \u2190
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(lightbox < images.length - 1 ? lightbox + 1 : 0);
                  }}
                  className="absolute right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-glass-border bg-dark-800/80 text-text-muted transition-colors hover:text-text-primary"
                >
                  \u2192
                </button>
              </>
            )}

            {/* Image */}
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-6 text-sm text-text-secondary"
            >
              {images[lightbox].alt}
              {images.length > 1 && (
                <span className="ml-3 text-text-muted">
                  {lightbox + 1} / {images.length}
                </span>
              )}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

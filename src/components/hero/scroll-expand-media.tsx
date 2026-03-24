"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ScrollExpandMediaProps {
  mediaSrc: string;
  mediaType?: "video" | "image" | "youtube";
  bgImageSrc: string;
  title?: string;
  scrollLabel?: string;
  children?: ReactNode;
}

function getYoutubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?]+)/
  );
  const videoId = match?.[1] ?? "";
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=${videoId}&vq=hd1080&hd=1`;
}

export function ScrollExpandMedia({
  mediaSrc,
  mediaType = "image",
  bgImageSrc,
  title,
  scrollLabel = "Desliza para explorar",
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (expanded && e.deltaY < 0 && window.scrollY <= 5) {
        setExpanded(false);
        e.preventDefault();
      } else if (!expanded) {
        e.preventDefault();
        const delta = e.deltaY * 0.0009;
        const next = Math.min(Math.max(scrollProgress + delta, 0), 1);
        setScrollProgress(next);
        if (next >= 1) {
          setExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const deltaY = touchStartY - e.touches[0].clientY;

      if (expanded && deltaY < -20 && window.scrollY <= 5) {
        setExpanded(false);
        e.preventDefault();
      } else if (!expanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const next = Math.min(
          Math.max(scrollProgress + deltaY * factor, 0),
          1
        );
        setScrollProgress(next);
        if (next >= 1) {
          setExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      if (!expanded) window.scrollTo(0, 0);
    };

    const opts = { passive: false } as AddEventListenerOptions;
    window.addEventListener("wheel", handleWheel, opts);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, opts);
    window.addEventListener("touchmove", handleTouchMove, opts);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollProgress, expanded, touchStartY]);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textOffset = scrollProgress * (isMobile ? 180 : 150);

  const words = title?.split(" ") ?? [];
  const firstWord = words[0] ?? "";
  const rest = words.slice(1).join(" ");

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-dvh">
        <div className="relative w-full flex flex-col items-center min-h-dvh">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-dvh relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                {mediaType === "youtube" ? (
                  <div className="relative w-full h-full pointer-events-none overflow-hidden rounded-xl">
                    <iframe
                      src={getYoutubeEmbedUrl(mediaSrc)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
                      style={{
                        width: "300%",
                        height: "300%",
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 z-10" />
                    <motion.div
                      className="absolute inset-0 bg-black/30 rounded-xl"
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : mediaType === "video" ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/30 rounded-xl"
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title ?? "Hero"}
                      fill
                      className="object-cover rounded-xl"
                      priority
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50 rounded-xl"
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center text-center relative z-10 mt-4">
                  {scrollLabel && (
                    <motion.p
                      className="text-blue-200 font-medium text-sm"
                      style={{ transform: `translateX(${textOffset}vw)` }}
                      animate={{ opacity: 1 - scrollProgress * 2 }}
                    >
                      {scrollLabel}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col mix-blend-difference">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-blue-200"
                  style={{ transform: `translateX(-${textOffset}vw)` }}
                >
                  {firstWord}
                </motion.h1>
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-blue-200"
                  style={{ transform: `translateX(${textOffset}vw)` }}
                >
                  {rest}
                </motion.h1>
              </div>
            </div>

            <motion.div
              className="flex flex-col w-full px-4 py-10 md:px-16 lg:py-20"
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

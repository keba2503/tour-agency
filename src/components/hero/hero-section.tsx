"use client";

import { ScrollExpandMedia } from "./scroll-expand-media";
import { HeroContent } from "./hero-content";

export function HeroSection() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/videos/alicante-hero.mp4"
      bgImageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
      title="Descubre Alicante"
    >
      <HeroContent />
    </ScrollExpandMedia>
  );
}

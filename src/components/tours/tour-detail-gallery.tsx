"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TourDetailGalleryProps {
  images: string[];
  title: string;
}

export function TourDetailGallery({ images, title }: TourDetailGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
        <Image
          src={images[selected]}
          alt={`${title} - Foto ${selected + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                "relative w-20 h-14 rounded-lg overflow-hidden transition-opacity",
                i === selected ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
              )}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

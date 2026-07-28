"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { ListingImage } from "@/lib/listings/types";

export function ListingGallery({ images }: { images: ListingImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  if (!active) return null;

  return (
    <div>
      <div className="relative aspect-[16/10] bg-gray-light rounded-xs overflow-hidden mb-sm">
        <Image
          src={active.url}
          alt={active.alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          priority
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-sm overflow-x-auto pb-xs" role="tablist" aria-label="Property photos">
          {images.map((image, index) => (
            <button
              key={image.url + index}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show photo ${index + 1} of ${images.length}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative shrink-0 w-24 h-16 rounded-xs overflow-hidden border-2 transition-colors",
                index === activeIndex ? "border-gold" : "border-transparent hover:border-gray-medium",
              )}
            >
              <Image src={image.url} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

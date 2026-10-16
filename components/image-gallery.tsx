"use client"

import Image from "next/image"
import { useLang } from "@/lib/i18n"
import type { GalleryImage } from "@/lib/perspectives-data"

type ImageGalleryProps = {
  images: GalleryImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const { lang } = useLang()

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <figure
          key={image.id}
          className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt[lang]}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </figure>
      ))}
    </div>
  )
}

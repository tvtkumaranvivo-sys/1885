"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function VehicleGallery({ images, name }: { images: string[]; name: string }) {
  const [selectedImage, setSelectedImage] = useState(0);
  return <section aria-label={`${name} image gallery`}><div className="relative overflow-hidden rounded-xl bg-charcoal"><div className="flex snap-x snap-mandatory overflow-x-auto md:block"><div className="relative aspect-[4/3] min-w-full md:aspect-[16/10]"><Image src={images[selectedImage]} alt={`Sample development image of ${name}`} fill priority sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" /></div>{images.slice(1).map((image, index) => <div key={`${image}-${index}`} className="relative aspect-[4/3] min-w-full snap-center md:hidden"><Image src={image} alt="" fill sizes="100vw" className="object-cover" /></div>)}</div><span className="absolute bottom-4 right-4 rounded-sm bg-ink/80 px-3 py-1.5 text-xs font-bold text-ivory backdrop-blur-sm">{images.length} photos</span></div><div className="mt-3 hidden grid-cols-4 gap-3 md:grid">{images.map((image, index) => <button type="button" key={`${image}-${index}`} onClick={() => setSelectedImage(index)} className={cn("relative aspect-[4/3] overflow-hidden rounded-md border-2", selectedImage === index ? "border-brand" : "border-transparent")} aria-label={`View image ${index + 1}`}><Image src={image} alt="" fill sizes="160px" className="object-cover" /></button>)}</div><p className="mt-3 text-xs text-muted md:hidden">Swipe to view photos · Sample development images</p></section>;
}

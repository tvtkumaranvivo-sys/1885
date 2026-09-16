import Image from "next/image";
import type { InspectionPhoto } from "../types";

export function InspectionPhotoGallery({ photos }: { photos: InspectionPhoto[] }) {
  return <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">{photos.map((photo) => <figure key={photo.id} className="min-w-[76%] snap-center overflow-hidden rounded-lg border bg-surface md:min-w-0"><div className="relative aspect-[4/3]"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 76vw, 33vw" className="object-cover" /></div><figcaption className="p-3 text-sm font-bold">{photo.category}<span className="ml-2 text-xs font-medium text-muted">Sample evidence</span></figcaption></figure>)}</div>;
}

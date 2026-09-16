import Image from "next/image";
import Link from "next/link";
import { MapPin, ShieldCheck } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";
import type { Vehicle } from "./types";

const lakhFormatter = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
const numberFormatter = new Intl.NumberFormat("en-IN");

function formatPrice(price: number) { return `₹${lakhFormatter.format(price / 100000)} Lakh`; }

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        <Image src={vehicle.images[0].src} alt={vehicle.images[0].alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        <Badge variant="verified" className="absolute left-4 top-4 bg-surface/95">1885 Verified</Badge>
        <span className="absolute bottom-4 left-4 rounded-sm bg-ink/70 px-2 py-1 text-xs font-bold text-ivory backdrop-blur-sm">{vehicle.year}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-black leading-6 text-ink">{vehicle.name}</h2>
            <p className="mt-1 text-lg font-black text-brand">{formatPrice(vehicle.price)}</p>
          </div>
          <span className="shrink-0 rounded-sm bg-success/15 px-2 py-1 text-xs font-black text-success">{vehicle.inspectionScore}/100</span>
        </div>
        <p className="mt-4 text-sm font-medium text-muted">{numberFormatter.format(vehicle.kilometres)} km <span aria-hidden="true">·</span> {vehicle.fuel} <span aria-hidden="true">·</span> {vehicle.transmission}</p>
        <div className="mt-3 flex items-center gap-2 text-sm text-muted">
          <MapPin aria-hidden="true" size={16} />
          <span>{vehicle.city}</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink"><ShieldCheck aria-hidden="true" size={15} className="shrink-0 text-success" />Trust Score</span>
        </div>
        <Button asChild variant="outline" className="mt-5 w-full"><Link href={`/cars/${vehicle.id}`}>View Car</Link></Button>
      </div>
    </Card>
  );
}
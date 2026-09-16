import Image from "next/image";
import { MapPin } from "lucide-react";
import { Badge, Card, CardContent } from "@/components/ui";
import { formatCurrency, indianNumber } from "../format";
import type { OfferVehicle } from "../types";

export function OfferVehicleSummary({ vehicle }: { vehicle: OfferVehicle }) {
  return <Card className="overflow-hidden"><div className="relative aspect-[16/8] bg-charcoal"><Image src={vehicle.image} alt={`Sample placeholder image for ${vehicle.name}`} fill sizes="(max-width: 1024px) 100vw, 360px" className="object-cover" /><Badge variant="verified" className="absolute left-4 top-4 bg-surface/95">Verified Car</Badge></div><CardContent className="p-5"><h2 className="text-lg font-black">{vehicle.name}</h2><p className="mt-1 text-xl font-black text-brand">{formatCurrency(vehicle.price)} asking price</p><p className="mt-4 text-sm text-muted">{indianNumber.format(vehicle.kilometres)} km <span aria-hidden="true">·</span> {vehicle.fuel} <span aria-hidden="true">·</span> {vehicle.transmission}</p><p className="mt-2 flex items-center gap-1.5 text-sm text-muted"><MapPin aria-hidden="true" size={16} />{vehicle.city}<span className="ml-auto font-bold text-success">{vehicle.inspectionScore}/100 Inspection</span></p></CardContent></Card>;
}

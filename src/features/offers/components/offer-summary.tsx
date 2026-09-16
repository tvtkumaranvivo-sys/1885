import { Card, CardContent } from "@/components/ui";
import { differenceCopy, formatCurrency } from "../format";
import type { OfferVehicle } from "../types";

export function OfferSummary({ vehicle, amount }: { vehicle: OfferVehicle; amount: number }) {
  return <Card><CardContent className="p-6"><p className="text-xs font-black uppercase tracking-[0.16em] text-brand">Your offer</p><p className="mt-3 text-4xl font-black">{formatCurrency(amount)}</p><div className="mt-5 grid gap-3 border-t pt-5 text-sm"><div className="flex justify-between gap-4"><span className="text-muted">Seller asking</span><span className="font-black">{formatCurrency(vehicle.price)}</span></div><div className="flex justify-between gap-4"><span className="text-muted">Difference</span><span className="text-right font-black">{differenceCopy(amount, vehicle.price).replace("Your offer is ", "")}</span></div></div></CardContent></Card>;
}

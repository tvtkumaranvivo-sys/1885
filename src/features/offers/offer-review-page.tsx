"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Card, CardContent } from "@/components/ui";
import { OfferFeeBreakdown } from "./components/offer-fee-breakdown";
import { OfferSummary } from "./components/offer-summary";
import { OfferTimeline } from "./components/offer-timeline";
import { OfferVehicleSummary } from "./components/offer-vehicle-summary";
import type { OfferVehicle } from "./types";

export function OfferReviewPage({ vehicle, amount }: { vehicle: OfferVehicle; amount: number }) {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");
  const submit = () => { if (!confirmed) { setError("Confirm that this is an offer to purchase before submitting."); return; } router.push(`/cars/${vehicle.id}/offer/submitted?amount=${amount}`); };
  return <main className="min-h-screen bg-ivory pb-28 lg:pb-12"><div className="border-b bg-surface px-4 py-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><Link href={`/cars/${vehicle.id}/offer?amount=${amount}`} className="text-sm font-bold text-muted hover:text-brand">← Edit Offer</Link></div></div><section className="px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_360px]"><div className="order-2 lg:order-1"><p className="text-xs font-black uppercase tracking-[0.16em] text-brand">Sample offer flow</p><h1 className="mt-3 font-display text-5xl font-black uppercase tracking-[-0.06em]">Review your offer</h1><p className="mt-5 max-w-2xl leading-7 text-muted">Confirm the offer details before sending it to the seller. This does not process a payment.</p><div className="mt-8 grid max-w-2xl gap-5"><OfferSummary vehicle={vehicle} amount={amount} /><OfferFeeBreakdown amount={amount} /><Card><CardContent className="p-6"><h2 className="text-xl font-black">What happens next?</h2><div className="mt-6"><OfferTimeline /></div></CardContent></Card><label className="flex cursor-pointer gap-3 rounded-lg border bg-surface p-5 text-sm leading-6"><input type="checkbox" checked={confirmed} onChange={(event) => { setConfirmed(event.target.checked); setError(""); }} className="mt-1 size-4 accent-brand" /><span>I understand this is an offer to purchase and not an immediate payment.</span></label>{error && <p role="alert" className="text-sm font-bold text-brand">{error}</p>}<div className="hidden gap-3 sm:flex"><Button size="lg" onClick={submit}>Submit Offer</Button><Button asChild size="lg" variant="outline"><Link href={`/cars/${vehicle.id}/offer?amount=${amount}`}>Edit Offer</Link></Button></div></div></div><aside className="order-1 lg:order-2 lg:sticky lg:top-6 lg:self-start"><OfferVehicleSummary vehicle={vehicle} /></aside></div></section><div className="fixed inset-x-0 bottom-0 z-40 border-t bg-surface/95 p-3 backdrop-blur sm:hidden"><Button size="lg" className="w-full" onClick={submit}>Submit Offer</Button></div></main>;
}

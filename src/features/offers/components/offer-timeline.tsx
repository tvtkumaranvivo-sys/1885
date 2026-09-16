import { ChevronDown } from "lucide-react";

const steps = ["You submit the offer", "Seller reviews it", "Seller accepts, rejects, or counters", "If accepted, both sides proceed to the transaction process"];

export function OfferTimeline() {
  return <ol className="space-y-3">{steps.map((step, index) => <li key={step} className="flex gap-3"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-black text-white">{index + 1}</span><div className="min-w-0 flex-1"><p className="pt-1 text-sm font-bold">{step}</p>{index < steps.length - 1 && <ChevronDown aria-hidden="true" className="mt-2 text-brand" size={17} />}</div></li>)}</ol>;
}

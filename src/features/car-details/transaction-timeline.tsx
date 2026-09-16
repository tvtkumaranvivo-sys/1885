import { ChevronDown } from "lucide-react";

const steps = ["Offer accepted", "Payment secured", "Hub verification", "Handover", "RC transfer"];

export function TransactionTimeline() {
  return <ol className="grid gap-2 sm:grid-cols-5 sm:gap-0">{steps.map((step, index) => <li key={step} className="flex items-center gap-3 sm:flex-col sm:items-start"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-black text-white">{index + 1}</span><span className="text-sm font-bold">{step}</span>{index < steps.length - 1 && <ChevronDown aria-hidden="true" className="ml-auto text-brand sm:hidden" size={18} />}{index < steps.length - 1 && <span className="mt-3 hidden h-px w-full bg-brand/25 sm:block" />}</li>)}</ol>;
}

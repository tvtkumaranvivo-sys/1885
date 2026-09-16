"use client";

import { type ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import { indianNumber, parseOfferAmount } from "../format";

export function OfferAmountInput({ value, onChange, error }: { value: string; onChange: (value: string) => void; error?: string }) {
  const updateValue = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value.replace(/[^0-9]/g, ""));
  const displayValue = value ? indianNumber.format(parseOfferAmount(value)) : "";
  return <div><label htmlFor="offer-amount" className="text-sm font-black">Offer amount</label><div className={cn("mt-2 flex h-16 items-center rounded-lg border bg-surface px-5", error ? "border-brand" : "") }><span className="text-3xl font-black text-brand" aria-hidden="true">₹</span><input id="offer-amount" inputMode="numeric" pattern="[0-9]*" value={displayValue} onChange={updateValue} placeholder="11,80,000" aria-describedby="offer-amount-error" className="min-w-0 flex-1 bg-transparent px-3 text-3xl font-black tracking-[-0.04em] outline-none placeholder:text-muted/50" /></div>{error && <p id="offer-amount-error" role="alert" className="mt-2 text-sm font-bold text-brand">{error}</p>}</div>;
}

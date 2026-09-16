import { Card, CardContent } from "@/components/ui";
import { feeForOffer, formatCurrency } from "../format";

export function OfferFeeBreakdown({ amount }: { amount: number }) {
  const fee = feeForOffer(amount);
  return <Card><CardContent className="space-y-4 p-6"><div className="flex justify-between gap-5 text-sm"><span className="text-muted">Offer amount</span><span className="font-black">{formatCurrency(amount)}</span></div><div className="flex justify-between gap-5 text-sm"><span className="text-muted">Estimated transaction fee</span><span className="font-black">{formatCurrency(fee)}</span></div><div className="border-t pt-4"><div className="flex justify-between gap-5"><span className="font-black">Estimated total</span><span className="text-xl font-black text-brand">{formatCurrency(amount + fee)}</span></div><p className="mt-2 text-xs leading-5 text-muted">Estimate for development only. No payment will be processed.</p></div></CardContent></Card>;
}

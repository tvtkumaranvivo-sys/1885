export const indianNumber = new Intl.NumberFormat("en-IN");
export const indianCurrency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export function formatCurrency(value: number) { return indianCurrency.format(value); }
export function feeForOffer(amount: number) { return Math.max(5000, Math.round(amount * 0.01)); }
export function parseOfferAmount(value: string) { return Number(value.replace(/[^0-9]/g, "")); }
export function offerDifference(amount: number, askingPrice: number) { return askingPrice - amount; }
export function differenceCopy(amount: number, askingPrice: number) {
  const difference = offerDifference(amount, askingPrice);
  if (difference === 0) return "Your offer is at the asking price.";
  return `Your offer is ${formatCurrency(Math.abs(difference))} ${difference > 0 ? "below" : "above"} the asking price.`;
}

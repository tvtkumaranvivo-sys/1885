import { Badge } from "@/components/ui";
import type { OfferStatus } from "../types";

const labels: Record<OfferStatus, string> = { PENDING: "Pending seller response", ACCEPTED: "Accepted", REJECTED: "Rejected", COUNTERED: "Countered", EXPIRED: "Expired", CANCELLED: "Cancelled" };

export function OfferStatusBadge({ status }: { status: OfferStatus }) {
  const variant = status === "ACCEPTED" ? "verified" : status === "PENDING" || status === "COUNTERED" ? "pending" : "neutral";
  return <Badge variant={variant}>{labels[status]}</Badge>;
}

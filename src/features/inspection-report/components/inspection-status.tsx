import { CheckCircle2, CircleDashed, CircleHelp, ShieldCheck, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import type { InspectionStatusType } from "../types";

const details = {
  verified: { label: "Verified", icon: ShieldCheck, className: "bg-success/15 text-success" },
  passed: { label: "Passed", icon: CheckCircle2, className: "bg-success/15 text-success" },
  attention: { label: "Needs Attention", icon: TriangleAlert, className: "bg-brand/10 text-brand" },
  checked: { label: "Checked", icon: CircleHelp, className: "bg-black/5 text-ink" },
  "not-checked": { label: "Not Checked", icon: CircleDashed, className: "bg-black/5 text-muted" },
} as const;

export function InspectionStatus({ status, className }: { status: InspectionStatusType; className?: string }) {
  const item = details[status];
  const Icon = item.icon;
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold", item.className, className)}><Icon aria-hidden="true" size={14} />{item.label}</span>;
}

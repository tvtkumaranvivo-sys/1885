import { CheckCircle2, CircleAlert, Clock3, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const statusConfig = {
  verified: { label: "Verified", icon: CheckCircle2, className: "bg-success/10 text-success" },
  pending: { label: "Pending", icon: Clock3, className: "bg-brand/10 text-brand" },
  attention: { label: "Action needed", icon: CircleAlert, className: "bg-red-50 text-red-700" },
} as const;

export type StatusKind = keyof typeof statusConfig;
export interface StatusProps { status: StatusKind; label?: string; className?: string; }

export function Status({ status, label, className }: StatusProps) {
  const config = statusConfig[status];
  const Icon: LucideIcon = config.icon;
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold", config.className, className)}><Icon aria-hidden="true" size={14} />{label ?? config.label}</span>;
}

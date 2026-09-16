import { CheckCircle2, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import type { InspectionFinding as InspectionFindingModel } from "../types";

export function InspectionFinding({ finding }: { finding: InspectionFindingModel }) {
  const attention = finding.status === "attention";
  const Icon = attention ? TriangleAlert : CheckCircle2;
  return <li className="flex gap-3 text-sm leading-6"><Icon aria-hidden="true" size={19} className={cn("mt-0.5 shrink-0", attention ? "text-brand" : "text-success")} /><span>{finding.text}</span></li>;
}

import { ChevronDown } from "lucide-react";
import { InspectionStatus } from "./inspection-status";
import { InspectionItem } from "./inspection-item";
import type { InspectionSection as InspectionSectionModel } from "../types";

export function InspectionSection({ section }: { section: InspectionSectionModel }) {
  return <details open className="group rounded-lg border bg-surface"><summary className="flex cursor-pointer list-none items-center gap-4 p-5"><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-3"><h2 className="text-lg font-black">{section.title}</h2><InspectionStatus status={section.status} /></div><p className="mt-1 text-sm text-muted">{section.summary}</p></div><span className="text-lg font-black text-brand">{section.score}%</span><ChevronDown aria-hidden="true" className="transition-transform group-open:rotate-180" size={20} /></summary><div className="border-t px-5"><ul>{section.items.map((item) => <InspectionItem key={item.label} item={item} />)}</ul></div></details>;
}

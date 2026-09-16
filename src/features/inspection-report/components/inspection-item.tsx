import { InspectionStatus } from "./inspection-status";
import type { InspectionItem as InspectionItemModel } from "../types";

export function InspectionItem({ item }: { item: InspectionItemModel }) {
  return <li className="grid gap-2 border-b py-4 last:border-0 sm:grid-cols-[minmax(150px,0.7fr)_1.4fr_auto] sm:items-center"><span className="text-sm font-bold">{item.label}</span><span className="text-sm text-muted">{item.finding}</span><InspectionStatus status={item.status} className="w-fit" /></li>;
}

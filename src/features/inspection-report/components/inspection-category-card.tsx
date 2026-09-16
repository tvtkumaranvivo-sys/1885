import { Card, CardContent } from "@/components/ui";
import { InspectionStatus } from "./inspection-status";
import type { InspectionCategory } from "../types";

export function InspectionCategoryCard({ category }: { category: InspectionCategory }) {
  return <Card><CardContent className="p-5"><div className="flex items-start justify-between gap-3"><h3 className="font-black">{category.title}</h3><span className="text-xl font-black text-brand">{category.score}%</span></div><p className="mt-3 min-h-10 text-sm leading-5 text-muted">{category.summary}</p><InspectionStatus status={category.status} className="mt-4" /></CardContent></Card>;
}

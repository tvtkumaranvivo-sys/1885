import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import type { InspectionCategory } from "./types";

export function InspectionScore({ score, condition, categories }: { score: number; condition: string; categories: InspectionCategory[] }) {
  return <Card><CardContent className="p-6"><div className="flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-brand">Inspection score</p><p className="mt-3 font-display text-6xl font-black tracking-[-0.07em]">{score}<span className="text-2xl text-muted"> / 100</span></p><p className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-success"><CheckCircle2 aria-hidden="true" size={16} />{condition}</p></div><span className="rounded-full border-[7px] border-success/20 p-4 text-lg font-black text-success">{score}</span></div><div className="mt-8 space-y-4">{categories.map((category) => <div key={category.label}><div className="mb-1.5 flex justify-between text-sm"><span className="font-bold">{category.label}</span><span className="text-muted">{category.score}/100</span></div><div className="h-2 overflow-hidden rounded-full bg-black/10"><div className="h-full rounded-full bg-success" style={{ width: `${category.score}%` }} /></div></div>)}</div></CardContent></Card>;
}

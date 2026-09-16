import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui";

export function InspectionScore({ score, condition }: { score: number; condition: string }) {
  return <Card className="overflow-hidden"><CardContent className="grid gap-6 p-7 sm:grid-cols-[auto_1fr] sm:items-center"><div className="flex size-40 items-center justify-center rounded-full border-[12px] border-success/20 text-center"><div><p className="font-display text-5xl font-black tracking-[-0.08em] text-success">{score}</p><p className="text-sm font-black text-muted">/ 100</p></div></div><div><p className="text-xs font-black uppercase tracking-[0.16em] text-brand">Overall inspection score</p><h2 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.05em]">{condition}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted">Based on the inspection categories completed for this vehicle.</p><p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-success"><CheckCircle2 aria-hidden="true" size={17} />Sample development report</p></div></CardContent></Card>;
}

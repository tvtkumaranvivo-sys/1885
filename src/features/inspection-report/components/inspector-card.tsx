import { Badge, Card, CardContent } from "@/components/ui";
import type { InspectionReport } from "../types";

export function InspectorCard({ inspector }: { inspector: InspectionReport["inspector"] }) {
  return <Card><CardContent className="p-6"><Badge variant="pending">{inspector.status}</Badge><h2 className="mt-5 text-xl font-black">Inspection completed by</h2><dl className="mt-5 grid gap-4 text-sm"><div><dt className="font-bold text-muted">Inspector</dt><dd className="mt-1 font-black">{inspector.name}</dd></div><div><dt className="font-bold text-muted">Inspector ID</dt><dd className="mt-1 font-black">{inspector.id}</dd></div><div><dt className="font-bold text-muted">Inspection date</dt><dd className="mt-1 font-black">{inspector.date}</dd></div></dl><p className="mt-5 text-xs leading-5 text-muted">This inspector and report are sample development data.</p></CardContent></Card>;
}

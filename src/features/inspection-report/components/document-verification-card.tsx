import { Card, CardContent } from "@/components/ui";
import { InspectionStatus } from "./inspection-status";
import type { DocumentVerification } from "../types";

export function DocumentVerificationCard({ document }: { document: DocumentVerification }) {
  return <Card><CardContent className="p-5"><div className="flex items-center justify-between gap-3"><h3 className="font-black">{document.name}</h3><InspectionStatus status={document.status} /></div><p className="mt-3 text-sm text-muted">{document.note}</p></CardContent></Card>;
}

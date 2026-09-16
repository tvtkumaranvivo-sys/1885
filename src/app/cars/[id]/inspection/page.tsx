import { notFound } from "next/navigation";
import { getInspectionReport } from "@/features/inspection-report/data";
import { InspectionReportPage } from "@/features/inspection-report/inspection-report-page";

export default async function VehicleInspectionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const report = getInspectionReport(id);
  if (!report) notFound();
  return <InspectionReportPage report={report} />;
}

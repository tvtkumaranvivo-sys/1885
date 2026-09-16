export type InspectionStatusType = "verified" | "passed" | "attention" | "checked" | "not-checked";

export type InspectionItem = { label: string; status: InspectionStatusType; finding: string };
export type InspectionCategory = { id: string; title: string; score: number; status: InspectionStatusType; summary: string };
export type InspectionSection = InspectionCategory & { items: InspectionItem[] };
export type InspectionFinding = { text: string; status: "passed" | "attention" | "verified" };
export type DocumentVerification = { name: string; status: InspectionStatusType; note: string };
export type InspectionPhoto = { id: string; category: "Exterior" | "Engine" | "Interior" | "Tyres" | "Documents"; src: string; alt: string };

export type InspectionReport = {
  vehicleId: string;
  vehicleName: string;
  make: string;
  model: string;
  registrationNumber: string;
  inspectionDate: string;
  reportId: string;
  overallScore: number;
  condition: string;
  categories: InspectionCategory[];
  sections: InspectionSection[];
  issues: InspectionFinding[];
  positives: InspectionFinding[];
  documents: DocumentVerification[];
  odometer: { value: string; status: InspectionStatusType; note: string };
  inspector: { name: string; id: string; date: string; status: string };
  photos: InspectionPhoto[];
};

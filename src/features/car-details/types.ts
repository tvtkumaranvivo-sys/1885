import type { Vehicle } from "@/features/browse-cars/types";

export type InspectionCategory = { label: string; score: number };
export type InspectionFinding = { text: string; state: "positive" | "attention" };
export type VerificationItem = { label: string; status: "Verified" | "Clear" | "Checked" };

export type VehicleDetails = Vehicle & {
  gallery: string[];
  ownership: string;
  manufacturingYear: number;
  engine: string;
  color: string;
  inspectionCondition: string;
  inspectionCategories: InspectionCategory[];
  inspectionFindings: InspectionFinding[];
  documents: VerificationItem[];
  recommendedOffer: { low: number; high: number };
  seller: { since: string; response: string };
};

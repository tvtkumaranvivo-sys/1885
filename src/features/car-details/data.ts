import { vehicles } from "@/features/browse-cars/data";
import type { VehicleDetails } from "./types";

const creta = vehicles.find((vehicle) => vehicle.id === "hyundai-creta-2021");
if (!creta) throw new Error("Required development vehicle is missing.");

export const vehicleDetails: VehicleDetails[] = [{
  ...creta,
  gallery: creta.images.map((image) => image.src), ownership: "First owner", manufacturingYear: 2021, engine: "1.5L Petrol", color: "Titan Grey", inspectionCondition: "Excellent condition",
  inspectionCategories: [{ label: "Engine & Transmission", score: 97 }, { label: "Body & Accident", score: 95 }, { label: "Tyres & Brakes", score: 94 }, { label: "Electrical", score: 96 }, { label: "Interior", score: 95 }, { label: "Documents", score: 99 }],
  inspectionFindings: [{ text: "Engine performing normally", state: "positive" }, { text: "No major accident indicators", state: "positive" }, { text: "Tyres in good condition", state: "positive" }, { text: "RC verified", state: "positive" }, { text: "Ownership verified", state: "positive" }, { text: "Minor cosmetic wear noted during inspection", state: "attention" }],
  documents: [{ label: "RC", status: "Verified" }, { label: "Insurance", status: "Verified" }, { label: "Ownership", status: "Verified" }, { label: "Loan / Hypothecation", status: "Clear" }, { label: "Challans", status: "Checked" }],
  recommendedOffer: { low: 1180000, high: 1225000 }, seller: { since: "2021", response: "Usually responds within 2 hours" },
}];

export function getVehicleDetails(id: string) { return vehicleDetails.find((vehicle) => vehicle.id === id); }

import type { ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import type { VehicleFilters } from "./types";

type FilterOption = { label: string; value: string };
type FilterField = { key: keyof VehicleFilters; label: string; options: FilterOption[] };

const fields: FilterField[] = [
  { key: "location", label: "Location", options: ["Bengaluru", "Chennai", "Delhi", "Hyderabad", "Mumbai", "Pune"].map((value) => ({ label: value, value })) },
  { key: "price", label: "Price", options: [{ label: "Under ₹10 Lakh", value: "1000000" }, { label: "Under ₹15 Lakh", value: "1500000" }, { label: "Under ₹25 Lakh", value: "2500000" }] },
  { key: "make", label: "Make", options: ["Honda", "Hyundai", "Mahindra", "Maruti", "Tata"].map((value) => ({ label: value, value })) },
  { key: "model", label: "Model", options: ["Baleno", "City", "Creta", "Ioniq 5", "Nexon", "XUV700"].map((value) => ({ label: value, value })) },
  { key: "year", label: "Year", options: [{ label: "2023 or newer", value: "2023" }, { label: "2022 or newer", value: "2022" }, { label: "2021 or newer", value: "2021" }] },
  { key: "kilometres", label: "Kilometres", options: [{ label: "Under 20,000 km", value: "20000" }, { label: "Under 30,000 km", value: "30000" }, { label: "Under 50,000 km", value: "50000" }] },
  { key: "fuel", label: "Fuel", options: ["Petrol", "Diesel", "Electric"].map((value) => ({ label: value, value })) },
  { key: "transmission", label: "Transmission", options: ["Automatic", "Manual"].map((value) => ({ label: value, value })) },
  { key: "bodyType", label: "Body type", options: ["SUV", "Sedan", "Hatchback"].map((value) => ({ label: value, value })) },
];

export function FilterFields({ filters, onChange, className }: { filters: VehicleFilters; onChange: (event: ChangeEvent<HTMLSelectElement>) => void; className?: string }) {
  return <div className={cn("grid gap-3", className)}>{fields.map((field) => <label key={field.key} className="grid gap-1.5 text-xs font-bold text-muted"><span>{field.label}</span><select name={field.key} value={filters[field.key]} onChange={onChange} className="h-11 w-full rounded-md border bg-surface px-3 text-sm font-bold text-ink outline-none focus:border-ink"><option value="">Any {field.label.toLowerCase()}</option>{field.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>)}</div>;
}

import { SearchX } from "lucide-react";
import { Button } from "@/components/ui";

export function VehicleEmptyState({ onClear }: { onClear: () => void }) {
  return <div className="col-span-full flex min-h-80 flex-col items-center justify-center rounded-xl border border-dashed bg-surface px-6 text-center"><SearchX aria-hidden="true" size={36} className="text-brand" /><h2 className="mt-5 text-xl font-black">No verified cars match those filters.</h2><p className="mt-2 max-w-sm text-sm leading-6 text-muted">Try removing a filter or search for a different make, model or city.</p><Button variant="outline" className="mt-6" onClick={onClear}>Clear filters</Button></div>;
}

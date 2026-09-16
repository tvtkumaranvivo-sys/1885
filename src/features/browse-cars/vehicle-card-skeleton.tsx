export function VehicleCardSkeleton() {
  return <div className="overflow-hidden rounded-lg border bg-surface shadow-card" aria-hidden="true"><div className="aspect-[4/3] animate-pulse bg-black/10" /><div className="space-y-4 p-5"><div className="h-5 w-3/4 animate-pulse rounded bg-black/10" /><div className="h-5 w-1/3 animate-pulse rounded bg-black/10" /><div className="h-4 w-full animate-pulse rounded bg-black/10" /><div className="h-11 w-full animate-pulse rounded-md bg-black/10" /></div></div>;
}

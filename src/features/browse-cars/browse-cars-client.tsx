"use client";

import { type ChangeEvent, useMemo, useState } from "react";
import { Filter, Search, ShieldCheck } from "lucide-react";
import { Button, Input, Modal, ModalClose, ModalContent, ModalHeader, ModalTitle, ModalTrigger, Navigation } from "@/components/ui";
import { vehicles } from "./data";
import { FilterFields } from "./filter-fields";
import { emptyFilters, type VehicleFilters } from "./types";
import { VehicleCard } from "./vehicle-card";
import { VehicleEmptyState } from "./vehicle-empty-state";

const navigationItems = [
  { label: "Browse cars", href: "/browse-cars", current: true },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Why 1885", href: "/#why-trusted-car" },
];

type SortKey = "recommended" | "price-asc" | "price-desc" | "newest" | "kilometres";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "kilometres", label: "Lowest kilometres" },
];

export function BrowseCarsClient() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<VehicleFilters>(emptyFilters);
  const [sort, setSort] = useState<SortKey>("recommended");
  const filteredVehicles = useMemo(() => {
    const matches = vehicles.filter((vehicle) => {
      const searchable = `${vehicle.name} ${vehicle.make} ${vehicle.model} ${vehicle.city}`.toLowerCase();
      return (!query || searchable.includes(query.toLowerCase()))
        && (!filters.location || vehicle.city === filters.location)
        && (!filters.price || vehicle.price <= Number(filters.price))
        && (!filters.make || vehicle.make === filters.make)
        && (!filters.model || vehicle.model === filters.model)
        && (!filters.year || vehicle.year >= Number(filters.year))
        && (!filters.kilometres || vehicle.kilometres <= Number(filters.kilometres))
        && (!filters.fuel || vehicle.fuel === filters.fuel)
        && (!filters.transmission || vehicle.transmission === filters.transmission)
        && (!filters.bodyType || vehicle.bodyType === filters.bodyType);
    });
    switch (sort) {
      case "price-asc": return matches.sort((a, b) => a.price - b.price);
      case "price-desc": return matches.sort((a, b) => b.price - a.price);
      case "newest": return matches.sort((a, b) => b.year - a.year);
      case "kilometres": return matches.sort((a, b) => a.kilometres - b.kilometres);
      default: return matches;
    }
  }, [filters, query, sort]);
  const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => setFilters((current) => ({ ...current, [event.target.name]: event.target.value }));
  const clearFilters = () => { setQuery(""); setFilters(emptyFilters); };
return (
    <main>
      <Navigation items={navigationItems} brand="1885" />
      <section className="border-b bg-ivory px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-brand"><ShieldCheck aria-hidden="true" size={16} className="text-success" />1885 Verified marketplace</p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase leading-[0.93] tracking-[-0.05em] sm:text-6xl">Verified cars,<br />ready to buy.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">Every listing is inspected and document-verified through the 1885 process before it reaches the marketplace.</p>
          <div className="mt-7 flex max-w-3xl items-center gap-2 rounded-lg border bg-surface p-2 shadow-card focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/15">
            <Search aria-hidden="true" className="ml-2 shrink-0 text-muted" size={20} />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by make, model or city" aria-label="Search by make, model or city" className="h-11 min-w-0 border-0 px-0 text-base shadow-none focus:border-0" />
            {query && <Button type="button" variant="ghost" size="sm" className="shrink-0 text-muted hover:text-ink" onClick={() => setQuery("")}>Clear</Button>}
          </div>
        </div>
      </section>
      <section className="bg-surface-muted px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="hidden rounded-lg border bg-surface p-3 lg:block">
            <FilterFields filters={filters} onChange={updateFilter} className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" />
          </div>
          <Modal>
            <ModalTrigger asChild><Button variant="outline" className="w-full lg:hidden"><Filter aria-hidden="true" size={18} />Filters</Button></ModalTrigger>
            <ModalContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
              <ModalHeader><ModalTitle className="text-xl font-black">Filters</ModalTitle></ModalHeader>
              <FilterFields filters={filters} onChange={updateFilter} className="grid-cols-1" />
              <ModalClose asChild><Button className="mt-6 w-full">Show cars</Button></ModalClose>
            </ModalContent>
          </Modal>
        </div>
      </section>
      <section className="bg-ivory px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-bold text-muted"><span className="text-ink">{filteredVehicles.length}</span> verified {filteredVehicles.length === 1 ? "car" : "cars"} available</p>
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 text-xs font-bold text-muted"><span>Sort</span>
                <select value={sort} onChange={(event) => setSort(event.target.value as SortKey)} aria-label="Sort vehicles" className="h-10 rounded-md border bg-surface px-3 text-sm font-bold text-ink outline-none focus:border-ink">
                  {sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
              <Button variant="ghost" size="sm" onClick={clearFilters}>Reset filters</Button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredVehicles.length ? filteredVehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />) : <VehicleEmptyState onClear={clearFilters} />}
          </div>
        </div>
      </section>
    </main>
  );
  }
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Car, FileCheck2, Handshake, MapPin, Search, ShieldCheck, WalletCards } from "lucide-react";
import { Badge, Button, Navigation, Status } from "@/components/ui";
import { vehicles } from "@/features/browse-cars/data";
import { VehicleCard } from "@/features/browse-cars/vehicle-card";

const navigationItems = [
  { label: "Browse cars", href: "/browse-cars" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why 1885", href: "#why-trusted-car" },
];

const heroTrustPoints = ["250+ point inspection", "Documents verified", "RC transfer handled"];

const featuredVehicles = vehicles.slice(0, 3);

const browseCategories: { label: string; href: string; icon: typeof Car }[] = [
  { label: "SUVs", href: "/browse-cars", icon: Car },
  { label: "Sedans", href: "/browse-cars", icon: Car },
  { label: "Hatchbacks", href: "/browse-cars", icon: Car },
  { label: "Electric", href: "/browse-cars", icon: Car },
];

const trustCards = [
  { icon: ShieldCheck, title: "Verified before listed", copy: "Inspection and ownership checks happen before a car enters the marketplace." },
  { icon: Handshake, title: "Offers with clarity", copy: "Buyers make considered offers. Sellers can accept, reject or counter." },
  { icon: FileCheck2, title: "Paperwork handled", copy: "We coordinate payment, RC transfer, loan closure and final handover." },
];

const transactionSteps = [
  { number: "01", title: "Inspect", copy: "We verify the car, documents and ownership.", icon: FileCheck2 },
  { number: "02", title: "Offer", copy: "Buyers make offers. Sellers choose.", icon: Handshake },
  { number: "03", title: "Transact", copy: "Secure payment and final verification.", icon: WalletCards },
  { number: "04", title: "Transfer", copy: "We manage RC, loan and handover.", icon: BadgeCheck },
];

export default function Home() {
  return (
    <main id="top">
      <Navigation items={navigationItems} brand="1885" />

      {/* Hero — marketplace-first, drives to /browse-cars */}
      <section className="bg-ivory px-4 pb-10 pt-4 sm:px-6 sm:pb-14 lg:px-8 lg:pt-6">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl bg-charcoal shadow-raised lg:min-h-[500px] lg:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center gap-7 p-6 sm:p-9 lg:gap-6 lg:py-10 lg:px-12">
            <div>
              <Badge variant="dark" className="mb-5 border border-white/20 bg-white/10 uppercase tracking-[0.22em] text-ivory">Buy • Sell • Trust</Badge>
              <h1 className="max-w-xl font-display text-[2.75rem] font-black uppercase leading-[0.86] tracking-[-0.055em] text-ivory sm:text-6xl lg:text-[4.25rem]">Verified cars.<br />Ready to buy.</h1>
              <p className="mt-5 max-w-md text-base leading-7 text-ivory/75 sm:mt-6 sm:text-lg">Real offers. Secure payments. Every listing inspected and document-verified before it reaches you.</p>

              {/* Search field: navigation entry point into the marketplace (no local filtering) */}
              <form action="/browse-cars" method="get" role="search" aria-label="Search verified cars" className="mt-6 flex w-full max-w-md items-center gap-2 rounded-lg border border-white/15 bg-white/10 p-2 backdrop-blur-sm">
                <Search aria-hidden="true" className="ml-1.5 shrink-0 text-ivory/70 sm:ml-2" size={20} />
                <input type="text" name="q" placeholder="Search make, model or city" aria-label="Search by make, model or city" className="h-10 w-full min-w-0 border-0 bg-transparent px-1 text-sm text-ivory placeholder:text-ivory/50 focus:outline-none" />
                <Button type="submit" size="sm" className="shrink-0">Search</Button>
              </form>
            </div>

            <div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto"><Link href="/browse-cars">Browse verified cars <ArrowRight aria-hidden="true" size={18} /></Link></Button>
                <Button asChild size="lg" variant="outline" className="w-full border-ivory text-ivory hover:bg-ivory hover:text-ink sm:w-auto"><Link href="#how-it-works">Sell my car</Link></Button>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 sm:mt-6 sm:gap-x-5">
                {heroTrustPoints.map((point) => (
                  <li key={point} className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ivory/70 sm:tracking-[0.1em]">
                    <ShieldCheck aria-hidden="true" size={14} className="shrink-0 text-success" />{point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[16/8] lg:aspect-auto lg:min-h-full">
            <Image src="/images/trusted-car-hero-placeholder.png" alt="Placeholder photo of a graphite sedan in a contemporary setting" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[50%_58%] lg:object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-charcoal/40 lg:via-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-md border border-white/20 bg-black/35 px-3.5 py-2.5 text-ivory backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6 sm:px-4 sm:py-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em]">Every listing is verified</span>
              <ShieldCheck aria-hidden="true" size={20} className="shrink-0 text-success" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured verified cars — real listings from mock data */}
      <section id="featured-cars" className="border-y bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand">Fresh on the marketplace</p>
              <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl">Featured verified cars</h2>
            </div>
            <Button asChild variant="ghost" className="w-fit"><Link href="/browse-cars">View all cars <ArrowRight aria-hidden="true" size={18} /></Link></Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featuredVehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
          </div>
        </div>
      </section>

      {/* Quick browse entry points — each links into the marketplace */}
      <section className="bg-ivory px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brand">Start browsing</p>
            <Link href="/browse-cars" className="inline-flex w-fit items-center gap-1 text-sm font-bold text-ink hover:text-brand">See the full marketplace <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
          <div className="-mx-4 mt-5 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
            {browseCategories.map((category) => (
              <Link key={category.label} href={category.href} className="inline-flex shrink-0 items-center gap-2 rounded-full border bg-surface px-5 py-3 text-sm font-bold text-ink shadow-card transition-colors hover:border-ink hover:bg-ink hover:text-ivory">
                <category.icon aria-hidden="true" size={18} />{category.label}
              </Link>
            ))}
            <Link href="/browse-cars" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink bg-ink px-5 py-3 text-sm font-bold text-ivory transition-colors hover:bg-charcoal">
              <MapPin aria-hidden="true" size={18} />Browse by city
            </Link>
          </div>
        </div>
      </section>

      {/* Why 1885 — condensed trust story */}
      <section id="why-trusted-car" className="border-t bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brand">Built for confidence</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl">Buy knowing the car is exactly as described.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">1885 brings inspection, offers, payment, verification and paperwork into one clear process—so both sides know exactly where they stand.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3">
          {trustCards.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-lg border bg-surface p-6 shadow-card">
              <Icon aria-hidden="true" className="text-brand" size={26} />
              <h3 className="mt-7 text-lg font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-ivory px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand">One protected transaction</p>
              <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl">From first look<br />to final handover.</h2>
            </div>
            <Status status="verified" label="A verified process at every step" className="w-fit" />
          </div>
          <ol className="mt-10 grid overflow-hidden rounded-xl border bg-surface md:grid-cols-2 xl:grid-cols-4">
            {transactionSteps.map(({ number, title, copy, icon: Icon }, index) => (
              <li key={number} className="relative min-h-64 border-b p-6 last:border-b-0 md:odd:border-r md:even:border-r-0 md:[&:nth-child(3)]:border-b-0 xl:border-b-0 xl:border-r xl:last:border-r-0">
                <span className="text-sm font-black text-brand">{number}</span>
                <Icon aria-hidden="true" className="absolute right-6 top-6 text-ink/25" size={28} />
                <h3 className="mt-14 font-display text-3xl font-black uppercase tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{copy}</p>
                {index < transactionSteps.length - 1 && <ArrowRight aria-hidden="true" className="absolute bottom-6 right-6 hidden text-brand xl:block" size={20} />}
              </li>
            ))}
          </ol>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg"><Link href="/browse-cars">Browse verified cars <ArrowRight aria-hidden="true" size={18} /></Link></Button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="verified-process" className="bg-ink px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl bg-charcoal lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[440px]">
            <Image src="/images/trusted-car-hero-placeholder.png" alt="Placeholder vehicle photo representing a verified listing" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[65%_center] opacity-80" />
            <div className="absolute inset-0 bg-ink/20" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-12">
            <Badge variant="verified" className="w-fit">Verified listing journey</Badge>
            <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] text-ivory sm:text-5xl">Confidence, before you commit.</h2>
            <p className="mt-5 max-w-md leading-7 text-ivory/70">A car is checked before it is listed, and once an offer is accepted, the final verification, payment and transfer are coordinated through the same process.</p>
            <Button asChild size="lg" className="mt-8 w-fit"><Link href="/browse-cars">Browse verified cars <ArrowRight aria-hidden="true" size={18} /></Link></Button>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 border-t border-white/15 pt-7 text-xs text-ivory/55 sm:flex-row sm:items-center sm:gap-0">
          <span>© {new Date().getFullYear()} 1885</span>
          <span className="font-bold uppercase tracking-[0.12em] text-ivory/80">Buy • Sell • Trust</span>
        </div>
      </footer>
    </main>
  );
}

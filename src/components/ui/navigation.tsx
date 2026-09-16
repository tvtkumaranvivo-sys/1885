"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface NavigationItem { label: string; href: string; current?: boolean; }
export interface NavigationProps { items: NavigationItem[]; brand?: string; className?: string; }

export function Navigation({ items, brand = "Trusted Car", className }: NavigationProps) {
  const [open, setOpen] = useState(false);
  return <header className={cn("border-b bg-surface", className)}>
    <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <Link href="/" className="font-display text-lg font-black uppercase tracking-tight text-brand">{brand}</Link>
      <button type="button" className="rounded-md p-2 md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="primary-navigation">
        <span className="sr-only">Toggle navigation</span>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="primary-navigation" className={cn("absolute left-0 right-0 top-16 hidden border-b bg-surface p-4 md:static md:block md:border-0 md:p-0", open && "block")}>
        <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
          {items.map((item) => <li key={item.href}><Link href={item.href} aria-current={item.current ? "page" : undefined} className={cn("block rounded-sm px-3 py-2 text-sm font-bold text-muted hover:bg-black/5 hover:text-ink", item.current && "text-brand")}>{item.label}</Link></li>)}
        </ul>
      </nav>
    </div>
  </header>;
}

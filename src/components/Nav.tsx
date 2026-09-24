"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "research", label: "Research" },
  { href: "publications", label: "Publications" },
  { href: "work", label: "Work" },
  { href: "notes", label: "Notes" },
  { href: "about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="text-[15px] font-semibold tracking-tight">
            {site.nameShort}
          </span>
          <span className="hidden text-[13px] text-ink-faint sm:inline">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={isHome ? `#${l.href}` : `/#${l.href}`}
              className="group relative text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1 text-sm font-medium transition-colors hover:text-accent md:inline-flex"
          >
            Résumé
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="菜单"
            className="text-sm font-medium text-ink md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={isHome ? `#${l.href}` : `/#${l.href}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base text-ink transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 py-3 text-base font-medium transition-colors hover:text-accent"
            >
              Résumé <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

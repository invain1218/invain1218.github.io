import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredNotes } from "@/lib/content";

export default function Notes() {
  return (
    <>
      <div className="border-b border-line">
        {featuredNotes.map((n) => (
          <Link
            key={n.id}
            href={n.href}
            className="group flex items-center justify-between gap-6 border-t border-line py-5"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                {n.category}
              </span>
              <span className="text-base font-medium transition-colors duration-200 group-hover:text-accent sm:text-lg">
                {n.title}
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </Link>
        ))}
      </div>

      <Link
        href="/docs"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
      >
        All notes
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </>
  );
}

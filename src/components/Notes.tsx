import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { noteCategories } from "@/lib/content";

export default function Notes() {
  return (
    <>
      <div className="border-b border-line">
        {noteCategories.map((c) => (
          <Link
            key={c.id}
            href="/docs"
            className="group flex items-center justify-between gap-6 border-t border-line py-5"
          >
            <div className="min-w-0">
              <span className="text-base font-medium transition-colors duration-200 group-hover:text-accent sm:text-lg">
                {c.title}
              </span>
              <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">
                {c.description}
              </p>
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

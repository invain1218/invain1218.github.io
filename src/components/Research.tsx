"use client";

import { useState } from "react";
import { research } from "@/lib/content";

export default function Research() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div onMouseLeave={() => setActive(null)}>
      <div className="border-b border-line">
        {research.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActive(item.id)}
            className={`border-t border-line py-7 transition-opacity duration-300 ${
              active && active !== item.id ? "opacity-35" : "opacity-100"
            }`}
          >
            <div className="grid gap-2 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-6">
              <span className="font-mono text-sm text-ink-faint">
                {item.number}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-soft">
                  {item.summary}
                </p>
              </div>
              <span className="hidden whitespace-nowrap font-mono text-xs text-ink-faint lg:block">
                {item.tags}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

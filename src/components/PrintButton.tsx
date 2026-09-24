"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition-colors hover:text-accent"
    >
      <Printer className="h-3.5 w-3.5" />
      Print / PDF
    </button>
  );
}

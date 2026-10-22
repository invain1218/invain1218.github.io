import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, ExternalLink } from "lucide-react";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Industrial Energy Optimization",
  description:
    "Historical operating-data analysis and offline control evaluation for chilled-water pump energy optimization.",
  keywords: [
    "industrial energy optimization",
    "chilled water system",
    "pump energy",
    "offline policy evaluation",
  ],
};

const reportPdf = "/documents/industrial-energy-optimization.pdf";
const reportPptx = "/documents/industrial-energy-optimization.pptx";

export default function IndustrialEnergyProjectPage() {
  return (
    <Container className="py-16 lg:py-20">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Selected Work
      </Link>

      <header className="mb-12 mt-8 border-b border-line pb-8">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Industrial Energy Optimization
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
          An analysis of chilled-water pump operation using historical plant data,
          followed by an offline evaluation of a frequency-control policy.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-10">
          <section aria-labelledby="question-heading">
            <h2 id="question-heading" className="text-2xl font-semibold tracking-tight">
              Project Question
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Does operating the cooling-water pump at 100 Hz improve system
              conditions enough to offset its additional energy use compared with
              90 Hz? The analysis separates observed frequency differences from
              operating conditions such as load, exhaust pressure, and inlet
              temperature.
            </p>
          </section>

          <section aria-labelledby="data-heading">
            <h2 id="data-heading" className="text-2xl font-semibold tracking-tight">
              Data and Evaluation
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              The study uses East Plant operating records from September through
              November 2025. Thirty-minute energy totals were aligned with
              chiller operating measurements and pump-frequency records. The 90
              Hz and 100 Hz operating ranges were compared descriptively, by
              stratified operating conditions, and with K-nearest-neighbor
              matching.
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              A TSMixer model predicts system energy and exhaust pressure. A
              contextual multi-armed bandit then selects from discrete pump
              frequencies while keeping predicted pressure within a historical
              reference range. This policy was evaluated offline against
              historical operating sequences.
            </p>
          </section>

          <section aria-labelledby="findings-heading">
            <h2 id="findings-heading" className="text-2xl font-semibold tracking-tight">
              Findings and Limits
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink-soft">
              <li>
                In the historical summary, system energy averaged 455.66
                kWh/30 min at 90 Hz and 482.68 kWh/30 min at 100 Hz.
              </li>
              <li>
                Under K-nearest-neighbor matching, the source analysis reports
                20.20 kWh/30 min higher system energy at 100 Hz; the pump-energy
                difference is 20.67 kWh/30 min (p &lt; 0.001), while the chiller
                energy difference is not significant (p = 0.955).
              </li>
              <li>
                The offline policy evaluation estimated an 11.3% energy saving
                from historical operating sequences. This is not a field
                measurement or a verified realized saving; a controlled online
                A/B test is needed before deployment.
              </li>
            </ul>
          </section>
        </div>

        <aside className="h-fit border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <h2 className="text-sm font-semibold">Project Report</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Read the full 18-slide analysis or download the editable PowerPoint.
          </p>
          <div className="mt-5 flex flex-col items-start gap-3">
            <a
              href={reportPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
            >
              Open report PDF <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={reportPptx}
              download
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
            >
              Download PowerPoint <ArrowDownToLine className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>

      <section aria-label="Report preview" className="mt-14 border-t border-line pt-8">
        <iframe
          src={`${reportPdf}#view=FitH`}
          title="Industrial Energy Optimization report preview"
          className="h-[75vh] min-h-[540px] w-full rounded-md border border-line bg-white"
        />
      </section>
    </Container>
  );
}

export default function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex items-baseline gap-5 border-b border-line pb-5">
      <span className="font-mono text-sm text-ink-faint">{number}</span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

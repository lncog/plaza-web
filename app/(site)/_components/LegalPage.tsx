type Props = {
  title: React.ReactNode;
  effectiveDate: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, effectiveDate, children }: Props) {
  return (
    <main className="mx-auto flex w-full max-w-[760px] flex-1 flex-col px-6 sm:px-12 pt-32 pb-20">
      <div className="text-[10px] tracking-[0.2em] uppercase text-accent mb-4">
        Plaza Civic Inc.
      </div>

      <h1 className="font-serif text-5xl sm:text-6xl font-light leading-[1.1] tracking-tight">
        {title}
      </h1>
      <div className="mt-3 text-xs text-muted">{effectiveDate}</div>

      <div className="mt-12 legal-prose">{children}</div>
    </main>
  );
}

import Link from "next/link";

type Props = {
  title: React.ReactNode;
  effectiveDate: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, effectiveDate, children }: Props) {
  return (
    <main className="mx-auto flex w-full max-w-[760px] flex-1 flex-col px-8 py-16 sm:px-12 sm:py-20">
      <div className="text-[10px] tracking-[0.2em] uppercase text-muted mb-10 flex justify-between">
        <Link href="/" className="hover:text-accent">
          Plaza Civic Inc.
        </Link>
      </div>

      <h1 className="font-serif text-5xl sm:text-6xl font-light leading-[1.1] tracking-tight">
        {title}
      </h1>
      <div className="mt-3 text-xs text-muted">{effectiveDate}</div>

      <div className="mt-12 legal-prose">{children}</div>

      <footer className="mt-20 pt-8 border-t border-border text-[10px] tracking-[0.2em] uppercase text-muted flex justify-between">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span>Plaza Civic Inc.</span>
      </footer>
    </main>
  );
}

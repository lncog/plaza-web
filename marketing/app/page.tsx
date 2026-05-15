import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[760px] flex-1 flex-col px-8 py-20 sm:px-12 sm:py-28">
      <div className="text-[10px] tracking-[0.2em] uppercase text-muted mb-10">
        Plaza Civic Inc.
      </div>

      <h1 className="font-serif text-6xl sm:text-7xl font-light leading-[1.05] tracking-tight">
        Plaza
      </h1>

      <p className="mt-8 max-w-[560px] text-base leading-relaxed">
        A civic platform where communities discuss, vote on, and fund local
        initiatives. Coming soon to iOS and Android.
      </p>

      <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <Link href="/privacy" className="underline decoration-border underline-offset-4 hover:text-accent">
          Privacy Policy
        </Link>
        <Link href="/terms" className="underline decoration-border underline-offset-4 hover:text-accent">
          Terms of Service
        </Link>
        <a
          href="mailto:plaza.app.support@gmail.com"
          className="underline decoration-border underline-offset-4 hover:text-accent"
        >
          Contact
        </a>
      </div>

      <footer className="mt-auto pt-20 text-[10px] tracking-[0.2em] uppercase text-muted flex justify-between">
        <span>Plaza Civic Inc.</span>
        <span>Pleasanton, California</span>
      </footer>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./marketing.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navWordmark} onClick={() => setOpen(false)}>
        Plaza
      </Link>

      <div className={styles.navLinks}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} className={styles.navLink}>
            {l.label}
          </Link>
        ))}
        <Link href="/pledge" className={styles.navCta}>
          Pledge $1 →
        </Link>
      </div>

      <button
        type="button"
        className={styles.navBurger}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}>
        <span />
        <span />
        <span />
      </button>

      {open ? (
        <div className={styles.mobileMenu}>
          {LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.mobileMenuLink}
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/pledge"
            className={styles.navCta}
            onClick={() => setOpen(false)}>
            Pledge $1 →
          </Link>
        </div>
      ) : null}
    </nav>
  );
}

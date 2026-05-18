import Link from "next/link";
import styles from "./marketing.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWordmark}>Plaza</div>
      <div className={styles.footerLinks}>
        <Link href="/about" className={styles.footerLink}>
          About
        </Link>
        <Link href="/initiatives" className={styles.footerLink}>
          Initiatives
        </Link>
        <Link href="/privacy" className={styles.footerLink}>
          Privacy
        </Link>
        <Link href="/terms" className={styles.footerLink}>
          Terms
        </Link>
        <a
          href="mailto:plaza.app.support@gmail.com"
          className={styles.footerLink}>
          Contact
        </a>
      </div>
      <div className={styles.footerCopy}>© 2026 Plaza Civic Inc.</div>
    </footer>
  );
}

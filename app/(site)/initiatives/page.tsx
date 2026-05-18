import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../_components/Reveal";
import marketing from "../_components/marketing.module.css";
import styles from "../_components/pages.module.css";
import { INITIATIVES } from "./data";

export const metadata: Metadata = {
  title: "Initiatives — Plaza Civic",
  description:
    "Local initiatives your community is voting on and funding through Plaza.",
};

export default function InitiativesList() {
  return (
    <main>
      <Reveal />
      <div className={styles.listHero}>
        <div className={marketing.sectionLabel}>Initiatives</div>
        <h1 className={marketing.sectionTitle} style={{ marginBottom: 0 }}>
          What your community
          <br />
          is building.
        </h1>
      </div>

      <div className={styles.listGrid}>
        {INITIATIVES.map((intv, i) => {
          const isActive = intv.status === "active";
          const card = (
            <>
              <div
                className={`${styles.listTag} ${
                  isActive ? "" : styles.pending
                }`}>
                {isActive ? <span className={styles.listTagDot} /> : null}
                {intv.statusLabel}
              </div>
              <div className={styles.listCardTitle}>{intv.title}</div>
              <div className={styles.listCardLocation}>📍 {intv.location}</div>
              <div className={styles.listCardDesc}>{intv.shortDesc}</div>
            </>
          );

          return isActive ? (
            <Link
              key={intv.slug}
              href={`/initiatives/${intv.slug}`}
              className={`${styles.listCard} reveal reveal-d${(i % 3) + 1}`}>
              {card}
            </Link>
          ) : (
            <div
              key={intv.slug}
              className={`${styles.listCard} ${styles.disabled} reveal reveal-d${
                (i % 3) + 1
              }`}>
              {card}
            </div>
          );
        })}
      </div>
    </main>
  );
}

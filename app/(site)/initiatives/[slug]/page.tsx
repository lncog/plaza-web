import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../_components/Reveal";
import marketing from "../../_components/marketing.module.css";
import styles from "../../_components/intv-detail.module.css";
import { INITIATIVES, getInitiative } from "../data";

export function generateStaticParams() {
  return INITIATIVES.filter(i => i.status === "active").map(i => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const intv = getInitiative(slug);
  if (!intv) return { title: "Initiative — Plaza Civic" };
  return {
    title: `${intv.title} — Plaza Civic`,
    description: intv.shortDesc,
  };
}

const BORDA = [
  { label: "Benches / seating", width: "100%", score: "1st" },
  { label: "Table", width: "82%", score: "2nd" },
  { label: "Weatherproofing", width: "70%", score: "3rd" },
  { label: "Graffiti / art surface", width: "58%", score: "4th" },
  { label: "Tiny library", width: "50%", score: "5th" },
  { label: "Calisthenics equipment", width: "44%", score: "6th" },
  { label: "Drinking fountain", width: "38%", score: "7th" },
];

const TIMELINE = [
  {
    state: "complete",
    title: "Community input sessions",
    desc: "Three field sessions conducted at the intersection. 60+ respondents across diverse demographics. Borda count data collected and documented. May 2026.",
  },
  {
    state: "active",
    title: "TBID partnership forming",
    desc: "Proposal submitted to Telegraph Business Improvement District. Working sessions underway to define roles and responsibilities.",
  },
  {
    state: "",
    title: "Design phase",
    desc: "UC Berkeley CED and Engineering student collaborators engaged. Fabrication drawings produced for permit application.",
  },
  {
    state: "",
    title: "Permit application filed",
    desc: "Berkeley Transportation Division parklet modification permit submitted. Estimated 4–8 week review.",
  },
  {
    state: "",
    title: "Fundraising campaign",
    desc: "Community pledges open. Contractor quotes received. Full funding target confirmed.",
  },
  {
    state: "",
    title: "Fabrication & installation",
    desc: "Custom elements fabricated. Installation day with community volunteers. Documentation captured.",
  },
  {
    state: "",
    title: "Completion & Plaza stone",
    desc: "Engraved stone installed linking permanently to this documentation page. Community celebration. Target: early 2027.",
  },
];

export default async function InitiativeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const intv = getInitiative(slug);
  if (!intv || intv.status !== "active") notFound();

  return (
    <main>
      <Reveal />

      <div className={styles.hero}>
        <div>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            Community input · Active
          </div>
          <h1 className={styles.title}>
            Dwight × Telegraph Parklet Improvement
          </h1>
          <div className={styles.location}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Dwight Way &amp; Telegraph Ave, Berkeley CA 94704 · District 7
          </div>
          <p className={styles.desc}>
            The Dwight-Telegraph triangle is an underutilized public space at
            one of Berkeley&apos;s busiest intersections. Currently offering no
            seating, no amenities, and little reason to stop, the space has real
            potential to serve the students, residents, and unhoused community
            members who pass through it daily. Plaza conducted three community
            input sessions to understand what people actually want — then
            brought that data to TBID to make it happen.
          </p>
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Respondents</div>
              <div className={styles.metaValue}>60+</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Sessions</div>
              <div className={styles.metaValue}>3</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Budget target</div>
              <div className={styles.metaValue}>$35K</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Timeline</div>
              <div className={styles.metaValue}>9 mo</div>
            </div>
          </div>
        </div>

        <div className={styles.fundingCard}>
          <div className={styles.fundingLabel}>Community funding</div>
          <div className={styles.fundingAmount}>$35K</div>
          <div className={styles.fundingTarget}>target · funding not yet open</div>
          <div className={styles.fundingBar}>
            <div className={styles.fundingFill} style={{ width: "0%" }} />
          </div>
          <div className={styles.fundingStats}>
            <span>Pledging opens at launch</span>
            <span>Not yet funded</span>
          </div>
          <Link href="/pledge" className={styles.fundingBtn}>
            Pledge $1 toward this →
          </Link>
          <div className={styles.fundingNote}>
            Your pledge will be allocated toward this initiative once it enters
            the funding cycle. Cancel anytime.
          </div>
        </div>
      </div>

      <div className={styles.docSection}>
        <div className={marketing.sectionLabel}>Community input</div>
        <div className={styles.docSectionTitle}>What the community said.</div>

        <div className={styles.dataSessions}>
          <div className={styles.dataSession}>
            <div className={styles.dataSessionName}>Session 1 — Daytime</div>
            <div className={styles.dataSessionMeta}>
              Weekday afternoon · Students and passersby · Whiteboard
              methodology · 3-2-1 Borda count
            </div>
          </div>
          <div className={styles.dataSession}>
            <div className={styles.dataSessionName}>Session 2 — Evening</div>
            <div className={styles.dataSessionMeta}>
              Weekday evening · Mixed demographic · Students, residents,
              unhoused community members
            </div>
          </div>
          <div className={styles.dataSession}>
            <div className={styles.dataSessionName}>
              Session 3 — Taco Tuesday
            </div>
            <div className={styles.dataSessionMeta}>
              Evening social crowd · Highest conversion rate · Most diverse
              respondent pool
            </div>
          </div>
        </div>

        <div
          className={marketing.sectionLabel}
          style={{ marginBottom: 16 }}>
          Borda count results — all sessions combined
        </div>
        <div className={styles.dataResults}>
          {BORDA.map(r => (
            <div key={r.label} className={styles.dataResultRow}>
              <div className={styles.dataResultLabel}>{r.label}</div>
              <div className={styles.dataResultBar}>
                <div
                  className={styles.dataResultFill}
                  style={{ width: r.width }}
                />
              </div>
              <div className={styles.dataResultScore}>{r.score}</div>
            </div>
          ))}
        </div>

        <div className={styles.methodologyBox}>
          <strong>Methodology:</strong> Each respondent ranked their top 3
          preferences. First choice received 3 points, second choice 2 points,
          third choice 1 point (3-2-1 Borda count). Sessions approached ~85% of
          passersby across diverse demographics including students, professors,
          homeless residents, families, and evening foot traffic. Demographic
          note: younger respondents and homeless community members specifically
          advocated for inclusive non-hostile design. Older respondents showed
          preference for more defensive architecture.
        </div>
      </div>

      <div className={styles.docSection}>
        <div className={marketing.sectionLabel}>What we&apos;re building</div>
        <div className={styles.docSectionTitle}>The improvement plan.</div>
        <div
          style={{
            fontSize: 13,
            color: "var(--muted)",
            marginBottom: 24,
            lineHeight: 1.7,
          }}>
          MVP scope reflects the top community priorities. Ideal scope adds
          elements if funding allows.
        </div>

        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 12,
          }}>
          MVP scope
        </div>
        <div className={styles.improvementGrid}>
          <div className={styles.improvementItem}>
            <div className={styles.improvementIcon}>🪑</div>
            <div className={styles.improvementName}>
              Circular bench + center table
            </div>
            <div className={styles.improvementDesc}>
              ~8ft diameter, 6 seats, 2 entry gaps, 30&quot; center table.
              Inward-facing geometry encourages interaction. Hard to sleep on —
              activates daytime social use.
            </div>
          </div>
          <div className={styles.improvementItem}>
            <div className={styles.improvementIcon}>💪</div>
            <div className={styles.improvementName}>Calisthenics equipment</div>
            <div className={styles.improvementDesc}>
              Pull-up bar with gymnastic rings, parallel dip bars. Consolidated
              steel structure. Durable, zero maintenance, open to all.
            </div>
          </div>
          <div className={styles.improvementItem}>
            <div className={styles.improvementIcon}>💧</div>
            <div className={styles.improvementName}>Drinking fountain</div>
            <div className={styles.improvementDesc}>
              Bottle-fill and direct-drink fountain. Pending confirmation of
              original water infrastructure. Serves all community members
              equally.
            </div>
          </div>
          <div className={`${styles.improvementItem} ${styles.dashed}`}>
            <div className={styles.improvementIcon}>⭕</div>
            <div className={styles.improvementName}>
              + Ideal scope additions
            </div>
            <div className={styles.improvementDesc}>
              Flat sleepable bench with weatherproofing, sanctioned graffiti
              surface, free little library (Moe&apos;s Books partnership), warm
              tree-mounted lighting, native plants.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.docSection}>
        <div className={marketing.sectionLabel}>Progress</div>
        <div className={styles.docSectionTitle}>Where we are.</div>
        <div className={styles.timeline}>
          {TIMELINE.map(t => (
            <div key={t.title} className={styles.timelineItem}>
              <div
                className={`${styles.timelineDot} ${
                  t.state ? styles[t.state] : ""
                }`}
              />
              <div>
                <div className={styles.timelineTitle}>{t.title}</div>
                <div className={styles.timelineDesc}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.docSection}>
        <div className={marketing.sectionLabel}>Partners</div>
        <div className={styles.docSectionTitle}>Who&apos;s making this happen.</div>
        <div className={styles.partnersRow}>
          <div className={styles.partnerChip}>
            <div className={styles.partnerDot} />
            Plaza Civic Inc.
          </div>
          <div className={styles.partnerChip}>
            <div className={styles.partnerDot} />
            Telegraph Business Improvement District (TBID)
          </div>
          <div className={`${styles.partnerChip} ${styles.muted}`}>
            <div className={styles.partnerDot} />
            UC Berkeley CED — in discussion
          </div>
          <div className={`${styles.partnerChip} ${styles.muted}`}>
            <div className={styles.partnerDot} />
            Moe&apos;s Books — in discussion
          </div>
        </div>
      </div>

      <div className={styles.qrSection}>
        <div className={styles.qrBox}>
          QR
          <br />
          stone
        </div>
        <div>
          <div className={styles.qrTitle}>This page is permanent.</div>
          <div className={styles.qrDesc}>
            When the installation is complete, an engraved stone at the site
            will link here permanently — so anyone who visits the space can see
            the full story of how it came to be. Community input, funding
            sources, design process, and the people behind it.
          </div>
        </div>
        <Link href="/pledge" className={styles.qrBtn}>
          Fund this initiative →
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";
import Reveal from "./_components/Reveal";
import marketing from "./_components/marketing.module.css";
import styles from "./_components/home.module.css";

const STEPS = [
  {
    n: "01",
    title: "Discuss",
    desc: "Browse vetted local initiatives and join the community conversation around what matters most.",
  },
  {
    n: "02",
    title: "Vote",
    desc: "Ranked choice voting determines which initiatives your community actually wants to fund.",
  },
  {
    n: "03",
    title: "Fund",
    desc: "Your $1/month pledge flows to the winners. Every dollar is designed to be traceable, every allocation yours to control.",
  },
  {
    n: "04",
    title: "Watch it happen",
    desc: "Partner organizations execute. Milestones are documented as work progresses — real change, on the record.",
  },
];

export default function Home() {
  return (
    <main>
      <Reveal />

      <section className={styles.hero}>
        <div className={styles.heroRing} style={{ width: 500, height: 500 }} />
        <div className={styles.heroRing} style={{ width: 800, height: 800 }} />
        <div className={styles.heroRing} style={{ width: 1100, height: 1100 }} />

        <div className={styles.heroEyebrow}>Bay Area · Launching 2026</div>
        <h1 className={styles.heroTitle}>
          Fund the change
          <br />
          <em>you want to see.</em>
        </h1>
        <p className={styles.heroSub}>
          Your community votes. Your dollars follow. Real change happens — and
          you watch every step.
        </p>

        <div className={styles.heroActions}>
          <Link href="/pledge" className={marketing.btnPrimary}>
            Pledge $1/month
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M3 7H11M11 7L7 3M11 7L7 11" />
            </svg>
          </Link>
          <Link href="/initiatives" className={marketing.btnGhost}>
            See our first initiative →
          </Link>
        </div>
      </section>

      <section className={styles.howSection}>
        <div className={styles.howInner}>
          <div className={`${marketing.sectionLabel} reveal`}>How it works</div>
          <h2 className={`${marketing.sectionTitle} reveal reveal-d1`}>
            The full civic loop,
            <br />
            closed for the first time.
          </h2>
          <div className={styles.stepsGrid}>
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`${styles.step} reveal reveal-d${i + 1}`}>
                <div className={styles.stepNum}>{s.n}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepDesc}>{s.desc}</div>
                <div className={styles.stepBar} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.pullQuote}>
        <p className={styles.pullQuoteText}>
          &ldquo;Your dollar doesn&apos;t fund the park. It proves to the people
          who control the budget that you want the park badly enough to put your
          money where your mouth is.&rdquo;
        </p>
        <div className={styles.pullQuoteAttr}>Plaza Civic Inc. — Est. 2026</div>
      </div>

      <section className={styles.intvSection}>
        <div className={marketing.sectionWrap}>
          <div className={`${marketing.sectionLabel} reveal`}>
            Active initiatives
          </div>
          <h2 className={`${marketing.sectionTitle} reveal reveal-d1`}>
            Your community is
            <br />
            already speaking.
          </h2>
          <div className={styles.intvGrid}>
            <Link
              href="/initiatives/dwight-telegraph-parklet"
              className={`${styles.intvCard} reveal reveal-d1`}>
              <div className={styles.intvCardTag}>
                <span className={styles.intvCardTagDot} />
                In progress
              </div>
              <div className={styles.intvCardTitle}>
                Dwight × Telegraph Parklet Improvement
              </div>
              <div className={styles.intvCardLocation}>
                📍 Berkeley, CA — District 7
              </div>
              <div className={styles.intvProgressBar}>
                <div
                  className={styles.intvProgressFill}
                  style={{ width: "0%" }}
                />
              </div>
              <div className={styles.intvProgressLabel}>
                <span>Community input complete</span>
                <span>$35,000 target</span>
              </div>
            </Link>

            <div className={`${styles.intvCard} reveal reveal-d2`}>
              <div className={`${styles.intvCardTag} ${styles.pending}`}>
                Coming soon
              </div>
              <div className={styles.intvCardTitle}>
                Dublin Traffic Signal Timing Fix
              </div>
              <div className={styles.intvCardLocation}>📍 Dublin, CA</div>
              <div className={styles.intvProgressBar}>
                <div
                  className={styles.intvProgressFill}
                  style={{ width: "0%" }}
                />
              </div>
              <div className={styles.intvProgressLabel}>
                <span>Community input phase</span>
                <span />
              </div>
            </div>

            <div className={`${styles.intvCard} reveal reveal-d3`}>
              <div className={`${styles.intvCardTag} ${styles.pending}`}>
                Coming soon
              </div>
              <div className={styles.intvCardTitle}>
                Your neighborhood could be next.
              </div>
              <div
                className={styles.intvCardLocation}
                style={{ marginBottom: 0 }}>
                Plaza is expanding across the Bay Area. Suggest an initiative
                through the app.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tiersSection}>
        <div className={marketing.sectionWrap}>
          <div className={`${marketing.sectionLabel} reveal`}>Pledge tiers</div>
          <h2 className={`${marketing.sectionTitle} reveal reveal-d1`}>
            Start free.
            <br />
            Pledge when you&apos;re ready.
          </h2>
          <div className={styles.tiersGrid}>
            <div className={`${styles.tierCard} reveal reveal-d1`}>
              <div className={styles.tierName}>🐝 Bee</div>
              <div className={styles.tierPrice}>Free</div>
              <div className={styles.tierPeriod}>Always</div>
              <ul className={styles.tierFeatures}>
                <li>Browse all initiatives</li>
                <li>Join discussions</li>
                <li>Post grievances</li>
                <li>Follow your community</li>
              </ul>
              <span className={styles.tierBtn}>Join free</span>
            </div>

            <div
              className={`${styles.tierCard} ${styles.featured} reveal reveal-d2`}>
              <div className={styles.tierName}>🌱 Seed</div>
              <div className={styles.tierPrice}>$1</div>
              <div className={styles.tierPeriod}>per month · or $12/year</div>
              <ul className={styles.tierFeatures}>
                <li>Everything in Bee</li>
                <li>Ranked choice voting</li>
                <li>Direct fund allocation</li>
                <li>Impact tracking</li>
              </ul>
              <Link href="/pledge" className={styles.tierBtn}>
                Start pledging
              </Link>
            </div>

            <div className={`${styles.tierCard} reveal reveal-d3`}>
              <div className={styles.tierName}>🌿 Sprout</div>
              <div className={styles.tierPrice}>$3</div>
              <div className={styles.tierPeriod}>per month · coming soon</div>
              <ul className={styles.tierFeatures}>
                <li>Everything in Seed</li>
                <li>Civic badges</li>
                <li>Streak tracking</li>
                <li>Leaves economy access</li>
              </ul>
              <span className={`${styles.tierBtn} ${styles.tierBtnDisabled}`}>
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

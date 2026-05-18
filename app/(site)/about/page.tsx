import type { Metadata } from "next";
import Reveal from "../_components/Reveal";
import marketing from "../_components/marketing.module.css";
import styles from "../_components/pages.module.css";

export const metadata: Metadata = {
  title: "About — Plaza Civic",
  description:
    "Plaza is a civic technology platform where communities vote on and fund real local initiatives.",
};

const VALUES = [
  {
    n: "01",
    title: "Community first",
    desc: "Every initiative starts with verified community data. We don't decide what neighborhoods need — communities do, through a democratic process we facilitate and document.",
  },
  {
    n: "02",
    title: "Radical transparency",
    desc: "Every dollar is designed to be traceable. Every decision is documented. Every outcome is published. We build trust through visibility, not promises.",
  },
  {
    n: "03",
    title: "No perverse incentives",
    desc: "Plaza is ad-free and algorithmically neutral. Our incentives are aligned with community outcomes — not engagement metrics, not advertiser relationships.",
  },
];

export default function About() {
  return (
    <main>
      <Reveal />
      <div className={styles.aboutHero}>
        <div className={marketing.sectionLabel}>About Plaza</div>
        <div className={styles.aboutIntro}>
          <div>
            <h1
              className={marketing.sectionTitle}
              style={{ marginBottom: 32 }}>
              Civic change,
              <br />
              <em>finally in one place.</em>
            </h1>
            <div className={styles.aboutBody}>
              <p>
                Plaza is a civic technology platform where communities vote on
                and fund real local initiatives — then watch every dollar build
                something real. We&apos;re closing the loop that every civic
                platform before us left open: discuss, vote, fund, execute,
                document.
              </p>
              <p>
                Talk is free. That&apos;s why nobody listens to it. Plaza gives
                community members a way to demonstrate genuine civic will — not
                a petition signature, but a dollar pledged toward a specific
                outcome. That signal is what moves the people who control
                budgets.
              </p>
              <p>
                Plaza Civic Inc. is a California Nonprofit Public Benefit
                Corporation. We are not a government agency. We are not funded
                by advertisers. We exist to serve communities.
              </p>
            </div>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.aboutStat}>
              <div className={styles.aboutStatValue}>
                3<span>×</span>
              </div>
              <div className={styles.aboutStatLabel}>
                Community input sessions conducted at our first initiative site
              </div>
            </div>
            <div className={styles.aboutStat}>
              <div className={styles.aboutStatValue}>
                60<span>+</span>
              </div>
              <div className={styles.aboutStatLabel}>
                Residents surveyed across diverse demographics
              </div>
            </div>
            <div className={styles.aboutStat}>
              <div className={styles.aboutStatValue}>$1</div>
              <div className={styles.aboutStatLabel}>
                Minimum monthly pledge to unlock full voting rights
              </div>
            </div>
            <div className={styles.aboutStat}>
              <div className={styles.aboutStatValue}>
                100<span>%</span>
              </div>
              <div className={styles.aboutStatLabel}>
                Of funds designed to be traceable from pledge to completed
                project
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutValues}>
          <div
            className={marketing.sectionLabel}
            style={{ marginBottom: 32 }}>
            Our values
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map(v => (
              <div key={v.n} className="reveal">
                <div className={styles.valueNum}>{v.n}</div>
                <div className={styles.valueTitle}>{v.title}</div>
                <div className={styles.valueDesc}>{v.desc}</div>
              </div>
            ))}
          </div>

          <div className={styles.aboutLegal}>
            <div className={styles.aboutLegalText}>
              <strong>Plaza Civic Inc.</strong> is a California Nonprofit Public
              Benefit Corporation incorporated in May 2026. Our application for
              federal 501(c)(3) tax-exempt status is currently pending with the
              IRS. Contributions made prior to approval will be retroactively
              tax-deductible upon approval. All financial activity is documented
              and will be published in our annual Form 990 once required. For
              questions, contact us at plaza.app.support@gmail.com.
            </div>
            <div className={styles.aboutLegalBadge}>501(c)(3) pending</div>
          </div>
        </div>
      </div>
    </main>
  );
}

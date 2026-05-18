"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../_components/pledge.module.css";

type Billing = "monthly" | "annual";

export default function PledgeClient() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [submitted, setSubmitted] = useState(false);

  const price = billing === "annual" ? "$12" : "$1";
  const period = billing === "annual" ? "/yr" : "/mo";
  const btnLabel =
    billing === "annual"
      ? "Start $12/year pledge →"
      : "Start $1/month pledge →";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ─────────────────────────────────────────────────────────────────────
    // STRIPE-INTEGRATION-POINT
    // This is the ONLY place payment submission happens. Today it is a
    // frontend-only mock with NO backend call — see Discord spec from
    // dr cowmunch (Seed tier, charge-immediately, Stripe primary rail).
    //
    // To wire Stripe: replace the mock below with Stripe Elements +
    // PaymentIntent/Subscription creation via the Plaza backend. Do NOT
    // collect raw card numbers through these inputs in production — swap
    // the card fields for Stripe Elements (PCI requirement).
    //
    // HARD GATE: the interactive card form on this page is DEVELOP-ONLY
    // for team review. It must be disabled/replaced before this branch
    // merges to main / reaches production.
    // ─────────────────────────────────────────────────────────────────────
    setSubmitted(true);
  };

  return (
    <div className={styles.pledgePage}>
      <div className={styles.pledgeLeft}>
        <Link href="/" className={styles.pledgeWordmark}>
          Plaza
        </Link>
        <div className={styles.pledgeLeftMain}>
          <div className={styles.pledgeEyebrow}>Your civic pledge</div>
          <div className={styles.pledgeLeftTitle}>
            Fund the change
            <br />
            <em>you want to see.</em>
          </div>
          <div className={styles.pledgeLeftBody}>
            Your dollar doesn&apos;t fund the park. It proves to the people who
            control the budget that you want it badly enough to put your money
            where your mouth is.
          </div>
          <div className={styles.pledgeBenefits}>
            <div className={styles.pledgeBenefit}>
              <div className={styles.pledgeBenefitDot} />
              Vote on community initiatives with ranked choice
            </div>
            <div className={styles.pledgeBenefit}>
              <div className={styles.pledgeBenefitDot} />
              Track every dollar&apos;s impact as projects progress
            </div>
            <div className={styles.pledgeBenefit}>
              <div className={styles.pledgeBenefitDot} />
              See completed projects documented permanently
            </div>
            <div className={styles.pledgeBenefit}>
              <div className={styles.pledgeBenefitDot} />
              Cancel anytime — no commitment required
            </div>
          </div>
        </div>
        <div className={styles.pledgeLeftFooter}>
          Plaza Civic Inc. is a California Nonprofit Public Benefit
          Corporation. 501(c)(3) status pending with the IRS.
        </div>
      </div>

      <div className={styles.pledgeRight}>
        <div className={styles.pledgeRightTitle}>Complete your pledge</div>
        <div className={styles.pledgeRightSub}>
          Secure payment · Cancel anytime · Receipts by email
        </div>

        <div className={styles.devBanner}>
          Preview only — payments are not live yet. Submitting this form does
          not charge anything and sends no data anywhere.
        </div>

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successTitle}>You&apos;re on the list</div>
            <div className={styles.successBody}>
              This is a preview — no payment was processed. When pledging goes
              live, you&apos;ll be able to complete your $1/month pledge here.
              Thanks for being early.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.billingToggle}>
              <button
                type="button"
                className={`${styles.billingOpt} ${
                  billing === "monthly" ? styles.active : ""
                }`}
                onClick={() => setBilling("monthly")}>
                Monthly
              </button>
              <button
                type="button"
                className={`${styles.billingOpt} ${
                  billing === "annual" ? styles.active : ""
                }`}
                onClick={() => setBilling("annual")}>
                Annual — earn Leaves 🌿
              </button>
            </div>

            <div className={styles.tierCard}>
              <div className={styles.tierLeft}>
                <div className={styles.tierEmoji}>🌱</div>
                <div>
                  <div className={styles.tierName}>Seed membership</div>
                  <div className={styles.tierDesc}>
                    Voting rights · Fund allocation · Impact tracking
                  </div>
                </div>
              </div>
              <div className={styles.tierPrice}>
                {price}
                <span>{period}</span>
              </div>
            </div>

            <label className={styles.formLabel}>Payment details</label>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Card number</label>
              <input
                className={styles.fieldInput}
                placeholder="1234 5678 9012 3456"
                type="text"
                inputMode="numeric"
                autoComplete="off"
              />
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Expiry</label>
                <input
                  className={styles.fieldInput}
                  placeholder="MM / YY"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>CVC</label>
                <input
                  className={styles.fieldInput}
                  placeholder="···"
                  type="text"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Name on card</label>
              <input
                className={styles.fieldInput}
                placeholder="Your name"
                type="text"
                autoComplete="off"
              />
            </div>

            <div className={styles.stripeRow}>
              <div className={styles.stripeBadge}>stripe</div>
              Secured by Stripe · 256-bit encryption
            </div>

            <button type="submit" className={styles.submitBtn}>
              {btnLabel}
            </button>

            <div className={styles.disclosure}>
              Plaza Civic Inc. is a California Nonprofit Public Benefit
              Corporation (EIN on file). Our application for 501(c)(3) federal
              tax-exempt status is currently pending with the IRS. Contributions
              made prior to approval will be retroactively tax-deductible upon
              approval. Your pledge supports community-voted local initiatives
              and Plaza&apos;s operating costs. Pledges are recurring charges and
              may be cancelled at any time. Payment processing is handled
              securely by Stripe. Plaza does not sell or share your payment
              information.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

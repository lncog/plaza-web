import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Plaza Civic",
  description:
    "How Plaza Civic collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title={
        <>
          Privacy
          <br />
          Policy
        </>
      }
      effectiveDate="Effective date: May 7, 2026 · Last updated: May 7, 2026"
    >
      <p>
        Plaza Civic Inc. (&ldquo;Plaza,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo;
        or &ldquo;us&rdquo;) is a civic technology platform that helps
        communities discuss, vote on, and fund local initiatives. This policy
        explains what we collect, how we use it, and the choices you have. We
        will never sell your personal data. We will never share it with
        advertisers. We will never use it to train AI models. We will always
        tell you plainly what we are doing with it.
      </p>

      <h2>What We Collect</h2>

      <p><strong>Account information</strong></p>
      <ul>
        <li>Phone number — required, used for account creation and identity verification</li>
        <li>Password — stored hashed by our authentication provider, never readable by Plaza staff</li>
        <li>First and last name — required, used to personalize your experience and identify you to other users when you choose to make your profile public</li>
        <li>Date of birth — required, used to confirm eligibility (13+ to create an account, 18+ to pledge or vote)</li>
        <li>Email address — optional, used for account recovery and important account notices if you provide one</li>
      </ul>

      <p><strong>Location information</strong></p>
      <ul>
        <li>City, state, and ZIP code — required, used to match you with local initiatives and determine which voting cycles you participate in</li>
      </ul>
      <p>We do not collect or track your GPS location. We do not request location permissions on your device.</p>

      <p><strong>Civic participation data</strong></p>
      <ul>
        <li>Voting history — which initiatives you voted for and how you ranked them</li>
        <li>Pledge and allocation history — your pledge tier, amount, and how you split funds across initiatives and scales</li>
        <li>Discussion and comment activity</li>
        <li>Initiatives you have followed or supported</li>
      </ul>

      <p><strong>Technical data</strong></p>
      <ul>
        <li>Crash reports and error data from the mobile app — including stack traces, app version, OS version, current screen, and recent navigation. We use Sentry for this. We scrub personal data from error reports before they are transmitted.</li>
        <li>Server logs — the backend records technical information about API requests (method, URL, response status, response time). Personal data is not logged in error messages.</li>
        <li>Push notification token (Apple or Google) when you grant push permission — used only to deliver Plaza notifications you have opted into.</li>
      </ul>

      <div className="highlight">
        We do not track your location in the background. We do not build
        advertising profiles. We do not use your data to train AI models. We use
        SMS exclusively for one-time codes during phone number verification — we
        do not send marketing or general notification SMS.
      </div>

      <div className="divider" />

      <h2>How We Use Your Data</h2>
      <ul>
        <li>To create and maintain your Plaza account</li>
        <li>To verify your phone number during signup via a one-time SMS code</li>
        <li>To match you with initiatives and voting cycles in your geographic area</li>
        <li>To process and track your pledge and allocation preferences</li>
        <li>To deliver app notifications you have opted into (voting cycle openings, funded initiative milestones, account events)</li>
        <li>To generate aggregate civic data — anonymized and aggregated — that demonstrates community priorities to partner organizations and government bodies</li>
        <li>To improve the app via crash reports and error monitoring</li>
        <li>To comply with legal obligations</li>
      </ul>

      <div className="divider" />

      <h2>Notifications</h2>
      <p>Plaza sends two kinds of notifications:</p>
      <ul>
        <li><strong>SMS</strong> — used only for phone verification during signup. You will receive at most one SMS per signup attempt, containing a one-time code. We do not send marketing, voting reminders, or general updates via SMS.</li>
        <li><strong>Push notifications</strong> — sent through the operating system&apos;s push service (Apple Push Notification service or Firebase Cloud Messaging) for in-app events you opt into. You can disable push notifications at any time in your device settings.</li>
      </ul>

      <div className="divider" />

      <h2>What We Share and With Whom</h2>

      <p><strong>Service providers</strong> — Plaza uses the following third-party services to operate the platform. Each receives only the data necessary to provide their service.</p>
      <ul>
        <li>Supabase — hosts our authentication system and primary database</li>
        <li>Railway — hosts our backend API server</li>
        <li>Twilio — delivers one-time SMS codes during phone verification</li>
        <li>Sentry — receives mobile crash reports and error data</li>
        <li>Apple Push Notification service and Firebase Cloud Messaging — deliver push notifications</li>
      </ul>

      <p><strong>Partner organizations</strong> — organizations that execute funded initiatives may receive aggregate funding data (such as total amount raised and number of contributors) but never individual contributor identities unless you explicitly opt in to public credit.</p>

      <p><strong>Government and civic partners</strong> — we may share anonymized, aggregated civic participation data with city and county governments to demonstrate community priorities. This data cannot be used to identify any individual user. When we do this, we will publicly disclose the partnership.</p>

      <div className="highlight">
        We will never sell your personal data. We will never share it with
        advertisers. We will never share it with political campaigns, PACs, or
        partisan organizations — individually or in aggregate.
      </div>

      <div className="divider" />

      <h2>Your Privacy Controls</h2>
      <ul>
        <li>You can make your profile private at any time — by default your name, location, supported initiatives, and tier are visible to other Plaza users, and you can hide each independently</li>
        <li>You can independently toggle visibility of your location, supported initiatives, tier, and pledge amount</li>
        <li>You can delete your account at any time from within the app</li>
        <li>You can request a copy of all data Plaza holds about you by emailing us — we will respond within 45 days</li>
        <li>You can disable push notifications in your device&apos;s settings at any time</li>
      </ul>

      <div className="divider" />

      <h2>California Residents — CCPA Rights</h2>
      <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act:</p>
      <ul>
        <li>The right to know what personal information we collect, use, and share</li>
        <li>The right to delete your personal information</li>
        <li>The right to opt out of the sale of your personal information — Plaza does not sell personal information, but you have this right regardless</li>
        <li>The right to non-discrimination for exercising your privacy rights</li>
      </ul>
      <p>To exercise any of these rights, contact us at plaza.app.support@gmail.com. We will respond within 45 days.</p>

      <div className="divider" />

      <h2>Data Retention and Deletion</h2>
      <p>We retain your account data for as long as your account is active.</p>

      <p>When you delete your account, you can choose between two options:</p>
      <ul>
        <li><strong>Let current cycle complete</strong> — your account is deactivated immediately, your active pledge runs to the end of the current funding cycle so initiatives you allocated to still receive your funds, and your account and personal data are permanently removed when the cycle ends. You can reactivate by signing back in before the cycle ends.</li>
        <li><strong>Cancel immediately</strong> — your active pledge is redirected to the community pool, your active allocations are released, and your account and personal data are permanently removed within 30 days. You cannot reactivate after choosing this option.</li>
      </ul>

      <p>After the deletion takes effect, we permanently remove your personal information and your civic participation activity (voting history, allocations, pledges, comments). We may retain limited records as required by law — for example, financial transaction records when payment processing is added in a future release.</p>

      <div className="divider" />

      <h2>Security</h2>
      <p>We use industry-standard encryption for data in transit and at rest. Passwords are hashed by our authentication provider and never stored in readable form. We will notify users promptly in the event of any breach affecting personal data.</p>

      <div className="divider" />

      <h2>Children&apos;s Privacy</h2>
      <p>Plaza is available to users aged 13 and older. Users under 18 can browse, follow, and discuss initiatives but cannot pledge, vote, or provide payment information. We do not collect payment data from users under 18 under any circumstances.</p>

      <p>We do not knowingly collect personal information from anyone under 13. If we become aware that a user is under 13, we will delete their account and associated data promptly. If you believe a user under 13 has created an account, please contact us at plaza.app.support@gmail.com.</p>

      <div className="divider" />

      <h2>Changes to This Policy</h2>
      <p>We will notify users in the app when material changes are made to this policy. The current version will always be available at the URL where you are reading this. Continued use of Plaza after notification constitutes acceptance of the updated policy.</p>

      <div className="contact-block">
        <h2>Questions</h2>
        <p>If you have any questions about this privacy policy or how we handle your data, reach out directly.</p>
        <p>plaza.app.support@gmail.com</p>
        <p>Plaza Civic Inc. · Pleasanton, California</p>
      </div>
    </LegalPage>
  );
}

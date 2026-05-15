import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Plaza Civic",
  description: "Terms of service for the Plaza Civic platform.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      title={
        <>
          Terms of
          <br />
          Service
        </>
      }
      effectiveDate="Effective date: TBD"
    >
      <p>
        These terms are being finalized. For questions about how Plaza Civic
        Inc. operates, please review our{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>{" "}
        or contact us at plaza.app.support@gmail.com.
      </p>

      <p>
        A full Terms of Service will be published before account creation is
        opened to the public. We will notify users in the app and via email
        (if provided) when the terms are available.
      </p>

      <div className="contact-block">
        <h2>Contact</h2>
        <p>plaza.app.support@gmail.com</p>
        <p>Plaza Civic Inc. · Pleasanton, California</p>
      </div>
    </LegalPage>
  );
}

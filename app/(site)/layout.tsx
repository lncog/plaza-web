import type { Metadata } from "next";
import { fontClass, siteIcons } from "../fonts";
import "../globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Plaza Civic — Civic Change in One Place",
  description:
    "Plaza is a civic platform where communities discuss, vote on, and fund local initiatives.",
  icons: siteIcons,
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontClass} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

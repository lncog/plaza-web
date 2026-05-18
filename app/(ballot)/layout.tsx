import type { Metadata } from "next";
import { fontClass, siteIcons } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Telegraph × Dwight — Vote on Features",
  description:
    "Rank the top 3 features you'd like to see at the Telegraph × Dwight intersection.",
  icons: siteIcons,
};

export default function BallotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontClass} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

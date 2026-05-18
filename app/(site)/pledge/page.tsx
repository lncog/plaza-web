import type { Metadata } from "next";
import PledgeClient from "./PledgeClient";

export const metadata: Metadata = {
  title: "Pledge — Plaza Civic",
  description:
    "Pledge $1/month to vote on and fund local initiatives through Plaza.",
};

export default function PledgePage() {
  return <PledgeClient />;
}

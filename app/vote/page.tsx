import type { Metadata } from "next";
import VoteClient from "./VoteClient";

export const metadata: Metadata = {
  title: "Telegraph × Dwight — Vote on Features",
  description:
    "Rank the top 3 features you'd like to see at the Telegraph × Dwight intersection.",
};

export default function VotePage() {
  return <VoteClient />;
}

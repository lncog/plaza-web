// Static initiative data for v1. Structured so it can later be swapped for
// a backend/CMS fetch without changing page components.

export type InitiativeStatus = "active" | "coming-soon";

export type Initiative = {
  slug: string;
  title: string;
  status: InitiativeStatus;
  statusLabel: string;
  location: string;
  shortDesc: string;
};

export const INITIATIVES: Initiative[] = [
  {
    slug: "dwight-telegraph-parklet",
    title: "Dwight × Telegraph Parklet Improvement",
    status: "active",
    statusLabel: "Community input · Active",
    location: "Berkeley, CA — District 7",
    shortDesc:
      "An underutilized public space at one of Berkeley's busiest intersections. Three community input sessions completed; partnership and design phases underway.",
  },
  {
    slug: "dublin-traffic-signal",
    title: "Dublin Traffic Signal Timing Fix",
    status: "coming-soon",
    statusLabel: "Coming soon",
    location: "Dublin, CA",
    shortDesc:
      "Community input phase. Suggest priorities for this initiative through the Plaza app.",
  },
];

export function getInitiative(slug: string): Initiative | undefined {
  return INITIATIVES.find(i => i.slug === slug);
}

"use client";

import { useScrollReveal } from "./useScrollReveal";

// Mount once per page to activate scroll-reveal on all `.reveal` nodes.
export default function Reveal() {
  useScrollReveal();
  return null;
}

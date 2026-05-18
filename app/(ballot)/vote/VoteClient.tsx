"use client";

import { useEffect, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "./vote.module.css";

type Initiative = { id: string; name: string; category: string };

const INITIATIVES: Initiative[] = [
  { id: "benches", name: "Benches", category: "Seating & Rest" },
  { id: "tables", name: "Tables", category: "Seating & Rest" },
  { id: "weatherproofing", name: "Weatherproofing", category: "Infrastructure" },
  { id: "graffiti-pillar", name: "Graffiti Pillar", category: "Public Art" },
  { id: "tiny-library", name: "Tiny Library", category: "Education & Culture" },
  { id: "calisthenics", name: "Calisthenics Equipment", category: "Health & Fitness" },
  { id: "drinking-fountain", name: "Drinking Fountain", category: "Infrastructure" },
  { id: "restroom", name: "Restroom", category: "Infrastructure" },
  { id: "emergency-btn", name: "Emergency Button", category: "Safety" },
  { id: "donation-box", name: "Donation Box", category: "Community" },
  { id: "more-plants", name: "More Plants", category: "Environment" },
  { id: "charge-station", name: "Charge Station", category: "Infrastructure" },
];

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfy7HUeXoGnqT21duZ189JWEVoRPdOezqRI4TvMU2CPNp_K9w/formResponse";
const ENTRY_RANK1 = "entry.1009612786";
const ENTRY_RANK2 = "entry.578383721";
const ENTRY_RANK3 = "entry.283842198";

const RANK_BG = ["#C9A84C", "#A8A8A8", "#A0674A"];
const RANK_PLACEHOLDERS = ["Tap a feature below", "Second choice", "Third choice"];
const RANK_CLASS = [styles.rank1, styles.rank2, styles.rank3];
const INTV_SEL_CLASS = [styles.sel1, styles.sel2, styles.sel3];

function nameFor(id: string) {
  return INITIATIVES.find((x) => x.id === id)?.name ?? "";
}

function InstagramFollow() {
  return (
    <>
      <p className={styles.followMsg}>
        Want to follow along as this project unfolds?
      </p>
      <a
        className={styles.instagramBtn}
        href="https://www.instagram.com/app.plaza"
        target="_blank"
        rel="noopener"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        Follow @app.plaza
      </a>
    </>
  );
}

function SortableBallotRow({
  id,
  rank,
  onRemove,
}: {
  id: string;
  rank: number;
  onRemove: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      className={`${styles.ballotRow} ${isDragging ? styles.dragging : ""}`}
      style={style}
    >
      <div className={`${styles.rankNum} ${RANK_CLASS[rank - 1]}`}>{rank}</div>
      <span className={styles.ballotName}>{nameFor(id)}</span>
      <button
        type="button"
        className={styles.removeBtn}
        onClick={() => onRemove(id)}
        aria-label={`Remove ${nameFor(id)} from ballot`}
      >
        ×
      </button>
      <div className={styles.dragHandle} {...attributes} {...listeners}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function EmptyBallotRow({ index }: { index: number }) {
  return (
    <div className={styles.ballotRow}>
      <div className={`${styles.rankNum} ${styles.rankEmpty}`}>{index + 1}</div>
      <span className={`${styles.ballotName} ${styles.placeholder}`}>
        {RANK_PLACEHOLDERS[index]}
      </span>
    </div>
  );
}

export default function VoteClient() {
  const [hydrated, setHydrated] = useState(false);
  const [alreadyVoted, setAlreadyVoted] = useState(false);
  const [ballot, setBallot] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // On mount, read localStorage. Pre-hydration we render the form view (the
  // alreadyVoted branch flickers in only for users who actually voted).
  useEffect(() => {
    try {
      if (localStorage.getItem("plaza-voted") === "1") {
        setAlreadyVoted(true);
      }
    } catch {
      // private mode, no-op
    }
    setHydrated(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 80, tolerance: 6 },
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = ballot.indexOf(String(active.id));
    const newIndex = ballot.indexOf(String(over.id));
    if (oldIndex === -1 || newIndex === -1) return;
    setBallot((b) => arrayMove(b, oldIndex, newIndex));
  };

  const toggleInitiative = (id: string) => {
    setBallot((b) => {
      const idx = b.indexOf(id);
      if (idx !== -1) return b.filter((x) => x !== id);
      if (b.length >= 3) return b;
      return [...b, id];
    });
  };

  const removeFromBallot = (id: string) => {
    setBallot((b) => b.filter((x) => x !== id));
  };

  const handleSubmit = () => {
    if (ballot.length < 3) return;

    const params = new URLSearchParams();
    if (ballot[0]) params.set(ENTRY_RANK1, nameFor(ballot[0]));
    if (ballot[1]) params.set(ENTRY_RANK2, nameFor(ballot[1]));
    if (ballot[2]) params.set(ENTRY_RANK3, nameFor(ballot[2]));
    void fetch(`${GOOGLE_FORM_URL}?${params.toString()}`, {
      method: "POST",
      mode: "no-cors",
    });

    try {
      localStorage.setItem("plaza-voted", "1");
    } catch {
      // ignore
    }
    setSubmitted(true);
  };

  if (hydrated && alreadyVoted) {
    return (
      <div className={styles.page}>
        <div className={styles.successScreen}>
          <div className={styles.successIcon}>✓</div>
          <h2>You already voted</h2>
          <p>Thanks — your ballot has been recorded.</p>
          <InstagramFollow />
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.successScreen}>
          <div className={styles.successIcon}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path
                d="M6 13.5L10.5 18L20 9"
                stroke="#0F6E56"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2>Vote submitted</h2>
          <p>
            Thanks for helping shape your neighborhood. Every vote counts toward
            what gets funded.
          </p>
          <div className={styles.successBallot}>
            <div className={styles.successLabel}>Your vote</div>
            {ballot.map((id, i) => (
              <div key={id} className={styles.successRow}>
                <div
                  className={styles.successNum}
                  style={{ background: RANK_BG[i], color: "#fff" }}
                >
                  {i + 1}
                </div>
                <span className={styles.successName}>{nameFor(id)}</span>
              </div>
            ))}
          </div>
          <InstagramFollow />
        </div>
      </div>
    );
  }

  const filledCount = ballot.length;
  const maxed = filledCount >= 3;

  let hint: React.ReactNode = "Rank your top 3 features to submit";
  if (filledCount === 1) hint = <><b>1 of 3</b> ranked — pick 2 more</>;
  else if (filledCount === 2) hint = <><b>2 of 3</b> ranked — pick 1 more</>;
  else if (filledCount === 3) hint = <><b>3 choices</b> ranked — ready to submit</>;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.wordmark}>Plaza</span>
        <span className={styles.locationBadge}>Telegraph × Dwight</span>
      </header>

      <div className={styles.hero}>
        <h1>What should we improve at this intersection?</h1>
        <p>Tap to pick your top 3, then drag to reorder by priority.</p>

        <div className={styles.ballotCard}>
          <div className={styles.ballotLabel}>Your ballot — drag to reorder</div>
          <div className={styles.ballotList}>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={ballot} strategy={verticalListSortingStrategy}>
                {ballot.map((id, i) => (
                  <SortableBallotRow
                    key={id}
                    id={id}
                    rank={i + 1}
                    onRemove={removeFromBallot}
                  />
                ))}
              </SortableContext>
            </DndContext>
            {Array.from({ length: 3 - filledCount }).map((_, i) => (
              <EmptyBallotRow key={`empty-${i}`} index={filledCount + i} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sectionLabel}>All features</div>
      <div className={styles.initiativesList}>
        {INITIATIVES.map((intv) => {
          const rankIdx = ballot.indexOf(intv.id);
          const selected = rankIdx !== -1;
          const cardClasses = [
            styles.intvCard,
            selected ? INTV_SEL_CLASS[rankIdx] : "",
            !selected && maxed ? styles.maxed : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div
              key={intv.id}
              className={cardClasses}
              onClick={
                !selected && maxed ? undefined : () => toggleInitiative(intv.id)
              }
              role="button"
              tabIndex={0}
            >
              <div className={styles.intvCircle}>
                {selected ? rankIdx + 1 : ""}
              </div>
              <div className={styles.intvInfo}>
                <div className={styles.intvName}>{intv.name}</div>
                <div className={styles.intvCat}>{intv.category}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ height: 110 }} />

      <div className={styles.submitBar}>
        <div className={styles.submitHint}>{hint}</div>
        <button
          type="button"
          className={styles.submitBtn}
          disabled={filledCount < 3}
          onClick={handleSubmit}
        >
          Submit my ballot
        </button>
      </div>
    </div>
  );
}

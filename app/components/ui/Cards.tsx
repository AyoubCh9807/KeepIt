import React from "react";

interface Card {
  title: string;
  desc: string;
}

const cards: Card[] = [
  { title: "Saved Links", desc: "Access your bookmarks in one place." },
  { title: "Notes", desc: "Keep your ideas organized and searchable." },
  { title: "Media", desc: "Store videos, PDFs, and other files easily." },
];

export const Cards: React.FC = () => {
  return (
    <section className="bg-(--color-bg) text-(--color-text-primary) py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Your Content At a Glance</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-(--color-card-bg) border border-(--border-default) rounded-lg p-6 shadow-md flex-1 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-(--color-text-secondary)">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

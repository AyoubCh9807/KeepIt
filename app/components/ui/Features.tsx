import React from "react";

interface Feature {
  title: string;
  desc: string;
}

const features: Feature[] = [
  { title: "Quick Save", desc: "Save links, media, PDFs, or notes instantly." },
  { title: "Organize with Boards", desc: "Categorize items using tags, folders, and boards." },
  { title: "Search & Filter", desc: "Full-text search and filter by type, date, or tag." },
  { title: "Offline Access", desc: "Access important items even without internet." },
];

export const Features: React.FC = () => {
  return (
    <section className="bg-(--color-surface) text-(--color-text-primary) py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-(--color-card-bg) border border-(--border-default) rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-(--color-text-secondary)">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

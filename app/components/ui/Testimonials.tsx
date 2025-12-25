import React from "react";

interface Testimonial {
  name: string;
  comment: string;
}

const testimonials: Testimonial[] = [
  { name: "Alice", comment: "KeepIt keeps me organized like nothing else." },
  { name: "Bob", comment: "The offline mode saved me during my trips." },
  { name: "Charlie", comment: "AI tagging is super helpful for research." },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-(--color-surface) text-(--color-text-primary) py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-(--color-card-bg) border border-(--border-default) rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <p className="text-(--color-text-secondary) mb-4">"{t.comment}"</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

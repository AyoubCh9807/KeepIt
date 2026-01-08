"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Sidebar } from "@/app/components/Sidebar";
import { Card } from "@/app/types/Card";
import Summary from "@/app/components/Summary";
import { searchCards } from "@/app/mock/cards";

interface CardParams {
  params: {
    cardId: string;
  };
}

export default function CardPage({ params }: CardParams) {
  const { cardId } = useParams();
  const [activeItem, setActiveItem] = useState<string>("All boards");
  const [cards, setCards] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const card = cards.find((c) => c.id === cardId);
    card &&
      setCurrentCard({
        title: card.title,
        description: card.description,
        tags: card.tags,
        type: card.type,
        url: card.url,
      });
  }, []);

  return (
    <div className="flex h-screen font-sans bg-(--color-bg) text-white">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-[var(--color-input-border)] bg-[var(--color-bg)]/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>My Boards</span>
                <span className="material-symbols-outlined text-[10px]">
                  chevron_right
                </span>
                <span>Productivity Tools</span>
                <span className="material-symbols-outlined text-[10px]">
                  chevron_right
                </span>
                <span>Link Details</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="material-symbols-outlined text-gray-400 text-[18px]">
                  public
                </span>
                <span className="text-sm font-medium text-gray-300">
                  Link Item
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 relative">
            <button className="flex items-center justify-center p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                content_copy
              </span>
            </button>
            <button className="flex items-center justify-center p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                delete
              </span>
            </button>

            {/* AI Summarize Button */}
            <button
              className="flex items-center justify-center p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setShowSummary(true)}
              title="AI Summarize"
            >
              <span className="material-symbols-outlined text-[20px]">
                auto_fix_high
              </span>
            </button>

            <div className="h-6 w-px bg-[var(--color-input-border)] mx-1"></div>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-sm font-medium rounded-lg transition-colors border border-[var(--color-primary)]/20">
              <span className="material-symbols-outlined text-[18px]">
                edit
              </span>
              Edit
            </button>

            {/* Summary Popup */}
            {showSummary && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-[var(--color-bg)] border border-[var(--color-border-dark)] rounded-lg shadow-lg z-20">
                <Summary
                  card={currentCard || searchCards[0]}
                  onClose={() => setShowSummary(false)}
                />
              </div>
            )}
          </div>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Tags + Title */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {["#productivity", "#webdev", "#inspiration"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                The Art of Focus: Mastering Attention in a Distracted World
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-[var(--color-input-border)] pb-6">
                <div className="flex items-center gap-2">
                  <div
                    className="h-6 w-6 rounded-full bg-cover border border-[var(--color-input-border)]"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQAo3D4FkKPSGIvxHMIzoGAk2brOBZBZAmoNKfH_SQm48ET8TkGsqd1hSqOeNF0BjoWrWGTSV5kbjz6-J1aQHg7AHqZRG45PdoEfR292lf97_30v7gQOuXJGjSHIVHlVi4bfYfEUrlvaqiE8iJ5UiM7lG1HpC9JrZyCG8oCMYcOMuw8A_se7SIIE0nWtUXeDGde80902pNnMgEyOkC2Tbl-AOgXjqrJBydGJJOanKZK7SHn9xReai1b66Z8BKtxNPAQ4vp_3yuNg')",
                    }}
                  ></div>
                  <span className="text-gray-300 font-medium">Alex Morgan</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                <span>Added on Oct 24, 2023</span>
                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    visibility
                  </span>
                  Public
                </span>
              </div>
            </div>

            {/* Source card */}
            <a
              href="https://example.com/art-of-focus"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-xl border border-[var(--color-input-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50 transition-all duration-300 shadow-lg hover:shadow-[var(--color-primary)]/5"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-48 bg-gray-800 flex items-center justify-center relative overflow-hidden shrink-0 min-h-[160px] sm:min-h-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent z-10"></div>
                  <span className="material-symbols-outlined text-6xl text-[var(--color-primary)]/40 z-0">
                    public
                  </span>
                </div>

                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1">
                        Source URL
                      </div>
                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                        theartoffocus.com/guide/mastery
                      </h2>
                      <p className="text-sm text-gray-400 line-clamp-1">
                        https://theartoffocus.com/guide/mastery-in-distracted-world
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all duration-300 cursor-pointer">
                      <span className="material-symbols-outlined text-[24px]">
                        arrow_outward
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Description + quick actions + properties */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-500">
                  subject
                </span>
                Description
              </h3>
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed bg-[var(--color-surface)]/50 p-6 rounded-xl border border-[var(--color-input-border)]/50">
                <p>
                  This article provides a deep dive into the concept of "Deep
                  Work" and how modern digital distractions are eroding our
                  ability to focus. Key strategies include time blocking,
                  digital minimalism, and environment design.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-[var(--color-surface)] border border-[var(--color-input-border)] rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Quick Actions
                  </h4>
                  <div className="flex flex-col gap-2">
                    <button className="flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-sm text-gray-300 hover:text-white transition-colors group">
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-[var(--color-primary)] transition-colors">
                          share
                        </span>
                        Share this link
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-gray-600 group-hover:text-gray-400">
                        chevron_right
                      </span>
                    </button>
                    <button className="flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-sm text-gray-300 hover:text-white transition-colors group">
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-[var(--color-primary)] transition-colors">
                          push_pin
                        </span>
                        Pin to top of board
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-gray-600 group-hover:text-gray-400">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>

                <div className="bg-[var(--color-surface)] border border-[var(--color-input-border)] rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Properties
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Board</span>
                      <span className="text-white font-medium">
                        Productivity Tools
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Status</span>
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Last Visited</span>
                      <span className="text-white">Just now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

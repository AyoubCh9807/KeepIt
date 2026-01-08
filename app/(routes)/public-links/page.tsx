"use client";

import { Sidebar } from "@/app/components/Sidebar";
import { useEffect, useState } from "react";
import { CardRenderer } from "@/app/components/renderers/CardRenderer";
import { Card } from "@/app/types/Card";
import { searchCards } from "@/app/mock/cards";
import { getMonthByNumber } from "@/app/utils/getMonthByNumber";
import { useRouter } from "next/navigation";

export default function PublicLinks() {
  const [activeItem, setActiveItem] = useState<string>("Public Links");
  const [cards, setCards] = useState<Card[]>([]); // start empty to avoid hydration mismatch
  const [filteredCards, setFilteredCards] = useState<Card[]>([...cards]);
  const [query, setQuery] = useState<string>("");

  const router = useRouter();

  // Generate random dates only on client
  useEffect(() => {
    const getRandomDate = () => {
      const day = Math.floor(Math.random() * 30) + 1; // from 1-30
      const monthNumber = Math.floor(Math.random() * 12) + 1; // from  1-12
      const monthName = getMonthByNumber(monthNumber); // returns "Jan", "Feb", etc.
      const dayPadded = String(day).padStart(2, "0"); // 01, 02, ...
      return `${monthName} ${dayPadded}`;
    };

    const cardsWithDate = searchCards.map((c) => ({
      ...c,
      date: getRandomDate(),
    }));

    setCards(cardsWithDate);
  }, []);

  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  useEffect(() => {
    const newCards = cards.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(newCards)
  }, [query]);

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-[var(--color-surface)]">
      {/* Main Sidebar */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Content area */}
      <main className="flex-1 overflow-y-auto">
        <header className="px-6 py-6 md:px-10 border-b border-[#333] bg-[var(--color-surface)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-2">
              Public Knowledge Base
            </h2>
            <p className="text-gray-400 text-lg">
              Discover, read, and summarize content shared by the community.
            </p>

            {/* Search */}
            <div className="relative max-w-3xl mt-4">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                search
              </span>
              <input
                type="text"
                placeholder="Search for public links, research PDFs, or community notes..."
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-(--color-surface-dark)
                 focus:border-amber-700
                 border border-transparent focus:ring-4 ring-(--color-primary)
                  text-white placeholder-gray-500"
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setQuery(e.target.value);
                }}
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
              {[
                { label: "All Content", icon: "tune", active: true },
                { label: "Links", icon: "link" },
                { label: "PDFs", icon: "picture_as_pdf" },
                { label: "Videos", icon: "play_circle" },
                { label: "Notes", icon: "description" },
              ].map(({ label, icon, active }) => (
                <button
                  key={label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                    active
                      ? "bg-[var(--color-primary)] text-[var(--color-surface)] font-semibold"
                      : "bg-[var(--color-surface-dark)] text-gray-300 hover:bg-[#2A2A2A] hover:text-white border border-[#333]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {icon}
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10 flex-1 overflow-y-auto bg-[var(--color-surface)]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={(e) => {
                      // this prevent clicks if the target is a button or link inside the card
                      if ((e.target as HTMLElement).closest("button, a"))
                        return;
                      // navigate to the card page
                      router.push(`/public-links/${card.id}`);
                    }}
                    className="cursor-pointer"
                  >
                    <CardRenderer
                      title={card.title}
                      description={card.description}
                      tags={card.tags}
                      cardType={card.type}
                      url={card.url ?? card.id}
                      date={card.date || "Jan 01"}
                      onFavourite={() => {}}
                      onUnfavourite={() => {}}
                      onCopyLink={() => {}}
                      onReport={() => {}}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

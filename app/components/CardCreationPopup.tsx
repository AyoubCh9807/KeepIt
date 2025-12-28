"use client";

import { useEffect, useRef, useState } from "react";

interface CardCreationPopupProps {
  onClose: () => void;
  onSelect: () => void;
  cardType: string;
  setCardType: (type: string) => void;
}

export const CardCreationPopup = ({ onClose, onSelect, cardType, setCardType }: CardCreationPopupProps) => {
  
  const cardOptions = [
    {
      icon: "link",
      title: "Link",
      subtitle: "Save a URL bookmark",
      shortcut: "Cmd+1",
      type: "linkcard"
    },
    {
      icon: "sticky_note_2",
      title: "Note",
      subtitle: "Quick plain text note",
      shortcut: "Cmd+2",
      type: "notecard"
    },
    {
      icon: "edit_note",
      title: "Draft",
      subtitle: "Rich text editor",
      shortcut: "Cmd+3",
      type: "draftcard"
    },
    {
      icon: "picture_as_pdf",
      title: "PDF",
      subtitle: "Upload a document",
      shortcut: "Cmd+4",
      type: "pdfcard"
    },
    {
      icon: "smart_display",
      title: "Video",
      subtitle: "Embed or upload video",
      shortcut: "Cmd+5",
      type: "videocard"
    },
  ];

  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  // Focus first card on mount
  useEffect(() => {
    cardRefs.current[0]?.focus();
  }, []);

  // Focus selected card on index change
  useEffect(() => {
    cardRefs.current[selectedCardIndex]?.focus();
  }, [selectedCardIndex]);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        setSelectedCardIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedCardIndex((prev) =>
          Math.min(prev + 1, cardOptions.length - 1)
        );
        break;
      case "Enter":
        e.preventDefault();
        cardRefs.current[selectedCardIndex]?.click();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative flex flex-col w-full max-w-[92vw] sm:max-w-lg md:max-w-xl bg-(--color-surface-dark) rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-6 pb-2 relative">
          <h3 className="absolute left-1/2 transform -translate-x-1/2 text-white text-xl font-bold leading-tight tracking-tight">
            Add to Board
          </h3>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <span className="material-symbols-outlined text-[22px] leading-none">
              close
            </span>
          </button>
        </div>

        <div className="flex flex-col p-4 gap-2">
          {cardOptions.map(({ icon, title, subtitle, shortcut, type }, index) => (
            <button
            onClick={() => {
              setCardType(type);
              onSelect()
            }}
              key={title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`group flex items-center gap-4 p-3 rounded-xl w-full text-left outline-none transition-all duration-200
                ${
                  selectedCardIndex === index
                    ? "bg-white/10"
                    : "hover:bg-white/5 active:bg-white/10"
                }
                focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 focus:ring-offset-surface-dark`}
            >
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-lg bg-primary/20 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-[24px] text-(--color-primary)">
                  {icon}
                </span>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <p className="text-white text-base font-medium leading-normal truncate"
                >
                  {title}
                </p>
                <p className="text-[#CCCCCC] text-xs font-normal truncate">
                  {subtitle}
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center justify-center rounded-lg h-7 px-3 bg-white/10 text-gray-300 text-xs font-medium border border-white/5">
                  {shortcut}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="px-6 pb-6 pt-2">
          <div className="flex items-center justify-center gap-2">
            <p className="text-xs text-gray-500 font-medium">
              Use <span className="text-gray-400">↑</span>{" "}
              <span className="text-gray-400">↓</span> to navigate,{" "}
              <span className="text-gray-400">Enter</span> to select
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

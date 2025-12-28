"use client";

import { LinkCard } from "@/app/components/LinkCard";
import { NoteCard } from "@/app/components/NoteCard";
import { PDFCard } from "@/app/components/PDFCard";
import { DraftCard } from "@/app/components/DraftCard";

import { CreateNewCard } from "@/app/components/ui/CreateNewCard";

import { ItemsBar } from "@/app/components/ItemsBar";
import { ItemFilterBar } from "@/app/components/ItemFilterBar";
import { Sidebar } from "@/app/components/Sidebar";
import { useState } from "react";
import { CardCreationPopup } from "@/app/components/CardCreationPopup";

export default function Dashboard() {
  const [creatingNewItem, setCreatingNewItem] = useState<boolean>(false);

  return (
    <div className="flex h-screen overflow-hidden font-sans relative">
      <Sidebar />

      <main className="flex-1 flex flex-col bg-(--color-surface-dark) min-w-0">
        <ItemsBar onPopupToggle={() => setCreatingNewItem(true)} />
        <ItemFilterBar />
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
            <NoteCard
              title="The future of PDK"
              description="And in depth analysis on how Personal Knowledge..."
              tags={["ai", "dev"]}
              date="Oct 24"
            />

            <LinkCard
              title={"Modern CSS Resets"}
              description={
                "A comprehensive guide to resetting your CSS for consistent styling across different browsers."
              }
              tags={["ai", "dev"]}
              date={"Nov 01"}
            />
            <DraftCard
              title="Q3 Goals Draft"
              description="1. Do my work. 2. Eat breakfast. 3. Have a good day."
              tags={["work", "important"]}
              date="Yesterday"
            />
            <PDFCard
              title="Brand_Guidelines_v2.pdf"
              description="Updated brand guidelines including logos, colors, and typography."
              tags={["design", "branding"]}
              date="Oct 24"
            />

            <div className="group relative flex flex-col bg-(--color-bg) border border-(--color-border-dark) rounded-xl p-0 overflow-hidden hover:border-(--color-primary)/50 hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              <div className="h-32 bg-gray-800 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                  <span className="material-symbols-outlined text-gray-500 text-4xl">
                    smart_display
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                  12:45
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    Advanced CSS Grid Layouts
                  </h3>
                  <button className="text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity -mr-2 -mt-2 p-1">
                    <span className="material-symbols-outlined text-[20px]">
                      more_vert
                    </span>
                  </button>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                  Learn how to build complex dashboard layouts using CSS Grid
                  and Flexbox.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      #dev
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Oct 20</span>
                </div>
              </div>
            </div>
            <div className="group relative flex flex-col bg-(--color-bg) border border-(--color-border-dark) rounded-xl p-5 hover:border-gray-500 hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              <div className="absolute top-4 right-4 flex items-center gap-1">
                <button className="text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/10 rounded">
                  <span className="material-symbols-outlined text-[20px]">
                    more_horiz
                  </span>
                </button>
              </div>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-teal-500/10 text-teal-500 mb-3">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Tailwind CSS Documentation
                </h3>
              </div>
              <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                Rapidly build modern websites without ever leaving your HTML.
              </p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    #dev
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    #ref
                  </span>
                </div>
                <span className="text-xs text-gray-500">Oct 18</span>
              </div>
            </div>

            <CreateNewCard
              onClick={() => setCreatingNewItem(!creatingNewItem)}
            />
          </div>
        </div>
      </main>

      {creatingNewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <CardCreationPopup onClose={() => setCreatingNewItem(false)} />
        </div>
      )}
    </div>
  );
}

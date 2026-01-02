import { Card } from "@/app/types/Card";
import { useState } from "react";

interface CardOptionsMenuProps {
  onFavourite: () => void;
  onCopyLink: () => void;
  onReport: () => void;
}

export const CardOptionsMenu = ({ onFavourite, onCopyLink, onReport }: CardOptionsMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-(--color-bg)/20 text-gray-500 hover:text-white hover:bg-white/20 transition-all"
      >
        <span className="material-symbols-outlined text-[20px] leading-none">
          more_horiz
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-(--color-bg) border border-white/10 rounded-md shadow-lg flex flex-col z-50">
          <button
            className="px-4 py-2 text-sm text-white hover:bg-white/10 flex items-center gap-2"
            onClick={() => { setOpen(false); onFavourite(); }}
          >
            <span className="material-symbols-outlined text-[16px]">favorite</span>
            Favourite
          </button>
          <button
            className="px-4 py-2 text-sm text-white hover:bg-white/10 flex items-center gap-2"
            onClick={() => { setOpen(false); onCopyLink(); }}
          >
            <span className="material-symbols-outlined text-[16px]">content_copy</span>
            Copy Link
          </button>
          <button
            className="px-4 py-2 text-sm text-white hover:bg-white/10 flex items-center gap-2"
            onClick={() => { setOpen(false); onReport(); }}
          >
            <span className="material-symbols-outlined text-[16px]">report</span>
            Report
          </button>
        </div>
      )}
    </div>
  );
};

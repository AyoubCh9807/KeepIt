import { WritingCardProps } from "../types/WritingCardProps";

export const DraftCard = ({
  title,
  description,
  tags,
  date,
}: WritingCardProps) => {
  return (
    <div className="group relative flex flex-col bg-[var(--color-bg)] border border-[var(--color-border-dark)] rounded-xl p-5 hover:border-gray-500 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
      
      {/* Top-right icons */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        {/* Pin button */}
        <button
          className="
            flex items-center justify-center w-8 h-8
            rounded-full 
            bg-[var(--color-bg)]/20
            text-[var(--color-secondary)] 
            hover:text-(--color-accent-hover)
            opacity-0 group-hover:opacity-100
            transition-all duration-200 transform hover:scale-110
          "
          title="Pin"
        >
          <span className="material-symbols-outlined text-[20px] leading-none">
            push_pin
          </span>
        </button>

        {/* More button */}
        <button
          className="
            flex items-center justify-center w-8 h-8
            rounded-full 
            bg-[var(--color-bg)]/20
            text-gray-500 
            opacity-0 group-hover:opacity-100
            transition-all duration-200 transform hover:scale-110 hover:bg-white/20 hover:text-white
          "
          title="More"
        >
          <span className="material-symbols-outlined text-[20px] leading-none">
            more_horiz
          </span>
        </button>
      </div>

      {/* Icon + Title */}
      <div className="mb-4 mt-2">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 mb-3 transition-all duration-200 group-hover:scale-105">
          <span className="material-symbols-outlined">description</span>
        </div>
        <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 line-clamp-3 mb-4 font-serif italic">
        {description}
      </p>

      {/* Tags & Date */}
      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20"
            >
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-500">{date || "Yesterday"}</span>
      </div>

      {/* Overlay button */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2 backdrop-blur-[1px]">
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
          Open Note
        </button>
      </div>
    </div>
  );
};

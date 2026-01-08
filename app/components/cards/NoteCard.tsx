import { WritingCardProps } from "../../types/WritingCardProps";
import { getClassNameByTag } from "../../utils/getClassNameByTag";
import { CardOptionsMenu } from "../ui/CardOptionsMenu";

export const NoteCard = ({
  title,
  description,
  tags,
  date,
  onFavourite,
  onCopyLink,
  onReport,
}: WritingCardProps) => {
  return (
    <div
      className="relative flex flex-col h-full bg-(--color-bg)
     p-5 rounded-xl border border-(--color-border-dark) hover:border-gray-500 hover:-translate-y-1 transition-all duration-200 group cursor-pointer shadow-sm hover:shadow-md"
    >
      {/* Top-right buttons */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        {/* Pin button */}
        <button
          className="
            flex items-center justify-center w-8 h-8
            rounded-full 
            bg-(--color-bg)/20
            text-(--color-secondary) 
            hover:text-(--color-accent-hover)
            opacity-0 group-hover:opacity-100
            transition-all duration-200 transform hover:scale-110
          "
          title="Unpin"
        >
          <span className="material-symbols-outlined text-[20px] leading-none">
            push_pin
          </span>
        </button>

        {/* Options Menu */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <CardOptionsMenu
            onFavourite={() => {
              onFavourite({
                title: title,
                description: description,
                tags: tags,
                type: "notecard",
              });
            }}
            onCopyLink={onCopyLink}
            onReport={onReport}
          />
        </div>
      </div>

      {/* Icon + Title */}
      <div className="mb-4 mt-2">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-3 transition-all duration-200 group-hover:scale-105">
          <span className="material-symbols-outlined">article</span>
        </div>
        <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-400 line-clamp-2 mb-4">{description}</p>
      )}

      {/* Tags & Date */}
      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {(tags && tags.length > 3 ? tags.slice(0, 3) : tags)?.map(
            (tag, index) => (
              <span
                key={index}
                className={`px-2 py-0.5 rounded text-[10px] font-medium ${getClassNameByTag(
                  tag
                )}`}
              >
                #{tag}
              </span>
            )
          )}
        </div>
        <span className="text-xs text-gray-500">{date || "2h ago"}</span>
      </div>
    </div>
  );
};

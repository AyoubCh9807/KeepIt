import { PDFCardProps } from "../../types/PDFCardProps";
import { CardOptionsMenu } from "../ui/CardOptionsMenu";
export const PDFCard = ({
  title,
  description,
  tags,
  date,
  url,
  onFavourite,
  onCopyLink,
  onReport,
}: PDFCardProps) => {
  return (
    <div
      className="group relative flex flex-col bg-(--color-bg) 
    border border-(--color-border-dark) rounded-xl p-5 hover:border-[var(--color-primary)]/50 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
    >
      {/* Top-right "More" button */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <CardOptionsMenu
          onFavourite={() => {
            onFavourite({
              title: title,
              description: description || "Yeah i dunno...",
              tags: tags || ["#random"],
              type: "pdfcard",
            });
          }}
          onCopyLink={onCopyLink}
          onReport={onReport}
        />
      </div>

      {/* PDF Icon + Title */}
      <div className="mb-4 mt-2">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/10 text-red-500 mb-3 transition-all duration-200 group-hover:scale-105">
          <span className="material-symbols-outlined">picture_as_pdf</span>
        </div>
        <h3 className="text-lg font-bold text-white leading-tight">
          {title.length > 18 ? title.slice(0, 18) + "..." : title}
        </h3>
        {description && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {description.length > 50
              ? description.slice(0, 50) + "..."
              : description}
          </p>
        )}
      </div>

      {/* Optional Preview Image */}
      <div className="w-full h-24 bg-gray-800 rounded-lg mb-4 flex items-center justify-center border border-white/5 relative overflow-hidden">
        {url ? (
          <img src={url} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <span className="material-symbols-outlined text-4xl text-gray-600">
            image
          </span>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20"></div>
      </div>

      {/* Tags & Date */}
      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex gap-2">
          {(tags && tags?.length > 3 ? tags?.slice(0, 3) : tags)?.map(
            (tag, index) => (
              <span
                key={index}
                className="px-2 rounded text-[10px] font-medium
               bg-red-500/10 text-red-400 border
                border-red-500/20 flex items-center"
              >
                #{tag}
              </span>
            )
          )}
        </div>
        <span className="text-xs text-gray-500">{date || "Unknown"}</span>
      </div>
    </div>
  );
};

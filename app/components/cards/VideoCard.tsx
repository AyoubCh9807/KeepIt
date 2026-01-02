import { useState } from "react";
import { RegularCardProps } from "../../types/RegularCardProps";
import { getClassNameByTag } from "../../utils/getClassNameByTag";
import Link from "next/link";
import { CardOptionsMenu } from "../ui/CardOptionsMenu";


export const VideoCard = ({
  title,
  description,
  tags,
  date,
  url,
  onFavourite,
  onCopyLink,
  onReport
}: RegularCardProps) => {
  const [duration, setDuration] = useState<string | null>(null);

  return (
    <div className="group relative flex flex-col bg-(--color-bg) border border-(--color-border-dark) rounded-xl p-0 overflow-hidden hover:border-(--color-primary)/50 hover:-translate-y-1 transition-all duration-200 cursor-pointer">
      <Link
        href={url ?? "/"}
        target="_blank"
        rel="noreferrer noopener"
        className="h-32 bg-gray-800 w-full relative"
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
          <span className="material-symbols-outlined text-gray-500 text-4xl">
            smart_display
          </span>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white leading-tight">
            {title}
          </h3>
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <CardOptionsMenu
              onFavourite={onFavourite}
              onCopyLink={onCopyLink}
              onReport={onReport}
            />
          </div>
        </div>

        <p className="text-sm text-gray-400 line-clamp-2 mb-2">{description}</p>

        {duration && (
          <span className="text-xs text-gray-500 mb-4">
            Duration: {duration}
          </span>
        )}

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            {(tags.length > 3 ? tags.slice(0, 3) : tags)?.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-0.5 rounded text-[10px] font-medium ${getClassNameByTag(
                  tag
                )}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

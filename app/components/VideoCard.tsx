import { useEffect, useState } from "react";
import { RegularCardProps } from "../types/RegularCardProps";
import { getClassNameByTag } from "../utils/getClassNameByTag";
import Link from "next/link";

export const VideoCard = ({
  title,
  description,
  tags,
  date,
  url,
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
          <button className="text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity -mr-2 -mt-2 p-1">
            <span className="material-symbols-outlined text-[20px]">
              more_vert
            </span>
          </button>
        </div>

        <p className="text-sm text-gray-400 line-clamp-2 mb-2">{description}</p>

        {duration && (
          <span className="text-xs text-gray-500 mb-4">
            Duration: {duration}
          </span>
        )}

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
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

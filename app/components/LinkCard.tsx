import { getClassNameByTag } from "../utils/getClassNameByTag";
import { RegularCardProps } from "../types/RegularCardProps";

export const LinkCard = ({ title, description, tags, date }: RegularCardProps) => {
  return (
    <div className="group relative flex flex-col bg-(--color-bg) border 
    border-(--color-border-dark) rounded-xl p-5 
    hover:border-(--color-primary)/50 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-lg shadow-black/20">
      
      {/* Icon + Title */}
      <div className="mb-4">
        <div className="flex justify-between items-start mb-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-pink-500/10 text-pink-500">
            <span className="material-symbols-outlined">link</span>
          </div>
          <button
            className="text-gray-500 hover:text-white transition-colors p-1"
            title="Visit Source"
          >
            <span className="material-symbols-outlined text-[20px]">
              open_in_new
            </span>
          </button>
        </div>
        <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">Created by Josh W. Comeau</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 line-clamp-2 mb-4">{description}</p>

      {/* CTA Button */}
      <a
        className="flex items-center justify-center w-full py-2 mb-4 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
        href="/link/modern-css-resets"
      >
        View Details
      </a>

      {/* Tags & Date */}
      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-0.5 rounded text-[10px] font-medium ${getClassNameByTag(tag)}`}
            >
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
    </div>
  );
};

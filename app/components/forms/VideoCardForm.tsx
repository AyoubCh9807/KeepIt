import { CardFormProps } from "@/app/types/CardFormProps";
import { getClassNameByTag } from "@/app/utils/getClassNameByTag";
import { useState } from "react";

export const VideoCardForm = ({
  onClose,
  onSubmit,
  title,
  setTitle,
  description,
  setDescription,
  tags,
  setTags,
  url,
  setUrl,
}: CardFormProps) => {
  const [inputVal, setInputVal] = useState<string>("");

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setInputVal("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputVal);
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="fixed custom-srollbar inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans">
      {/* Modal */}
      <div className="w-full max-w-[580px] max-h-[90vh] flex flex-col rounded-xl bg-(--color-surface-dark) shadow-2xl ring-1 ring-white/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-(--color-primary)/10 text-primary">
              <span className="material-symbols-outlined text-[24px]">
                movie
              </span>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold leading-tight">
                Add New Video
              </h3>
              <p className="text-xs text-gray-400 font-medium">
                Save a video to your knowledge base
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <span className="material-symbols-outlined text-gray-400 group-hover:text-white text-[20px]">
              close
            </span>
          </button>
        </div>

        {/* Scrollable Form */}
        <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
          <form className="flex flex-col gap-5">
            {/* Video URL */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="video-url"
                className="text-white text-sm font-medium flex justify-between"
              >
                Video Link
                <span className="text-xs text-primary font-normal">
                  Required
                </span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    link
                  </span>
                </div>
                <input
                  value={url}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUrl && setUrl(e.target.value);
                  }}
                  autoFocus
                  id="video-url"
                  placeholder="Paste YouTube or Video URL..."
                  type="url"
                  className="w-full rounded-lg bg-(--color-input-dark) border border-(--color-input-border) text-white placeholder:text-gray-500 pl-11 pr-4 py-3 text-sm focus:border-(--color-primary) focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            {/* Title */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="video-title"
                className="text-white text-sm font-medium"
              >
                Title
              </label>
              <input
                id="video-title"
                placeholder="e.g., React Tutorial for Beginners"
                type="text"
                className="w-full rounded-lg bg-(--color-input-dark) border border-(--color-input-border) text-white placeholder:text-gray-500 px-4 py-3 text-sm focus:border-(--color-primary) focus:ring-1 focus:ring-primary outline-none transition-all"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="video-desc"
                className="text-white text-sm font-medium flex justify-between"
              >
                Notes / Description
                <span className="text-xs text-gray-500 font-normal">
                  Optional
                </span>
              </label>
              <textarea
                id="video-desc"
                placeholder="Add a summary or key takeaways..."
                className="w-full rounded-lg bg-(--color-input-dark) border border-(--color-input-border) text-white placeholder:text-gray-500 px-4 py-3 text-sm min-h-[120px] resize-none focus:border-(--color-primary) focus:ring-1 focus:ring-primary outline-none transition-all custom-scrollbar"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="video-tags"
                className="text-white text-sm font-medium"
              >
                Tags
              </label>
              <div className="w-full min-h-[50px] rounded-lg bg-(--color-input-dark) border border-(--color-input-border) px-2 py-2 flex flex-wrap gap-1 items-center focus-within:border-(--color-primary) focus-within:ring-1 focus-within:ring-primary transition-all cursor-text overflow-y-auto max-h-32">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded select-none ${getClassNameByTag(
                      tag
                    )}`}
                  >
                    <span className="text-primary">#{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-white transition-colors focus:outline-none"
                    >
                      <span className="material-symbols-outlined text-[12px]">
                        close
                      </span>
                    </button>
                  </div>
                ))}
                <input
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Add tags..."
                  type="text"
                  className="bg-transparent border-none outline-none text-sm text-white flex-1 min-w-[60px] p-1 h-6 placeholder:text-gray-500"
                />
              </div>
              <p className="text-xs text-gray-500 pl-1">
                Press Enter or comma to add a tag
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#252525] border-t border-white/5 flex justify-end gap-3 flex-shrink-0 rounded-b-xl">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-(--color-primary) hover:bg-(--color-primary)/90 shadow-lg shadow-primary/20 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] focus:ring-primary"
          >
            <span className="material-symbols-outlined text-[18px]">check</span>
            Save Video
          </button>
        </div>
      </div>
    </div>
  );
};

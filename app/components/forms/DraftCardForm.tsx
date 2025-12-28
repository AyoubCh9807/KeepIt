import { CardFormProps } from "@/app/types/CardFormProps";
import { getClassNameByTag } from "@/app/utils/getClassNameByTag";
import { useState } from "react";

export const DraftCardForm = ({ onClose, onSubmit }: CardFormProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState<string>("");

  const addTag = (tag: string) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setInputVal("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      if (!inputVal || tags.includes(inputVal)) return;
      addTag(inputVal);
    }
  };

  const handleRemoveTag = (unwantedTag: string) => {
    setTags(tags.filter((tag) => tag !== unwantedTag));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="relative w-full max-w-2xl bg-white dark:bg-(--color-surface-dark)
     rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] 
     border border-(--color-input-border)">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-border-dark bg-white dark:bg-(--color-surface-dark) z-10">
        <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">
          Create New Draft
        </h2>
        <button 
        onClick={onClose}
        className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors rounded-full p-1 hover:bg-gray-100 dark:hover:bg-white/10">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <div className="flex flex-col gap-2">
          <label
            className="text-gray-700 dark:text-gray-200 text-sm font-medium leading-normal"
            htmlFor="title"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            autoFocus
            className="w-full rounded-lg border border-(--color-input-border) 
            dark:border-border-dark bg-gray-50 dark:bg-(--color-input-bg)
             px-4 py-3 text-white placeholder-gray-400 
             dark:placeholder-gray-500 focus:border-(--color-input-border) focus:ring-1 
             focus:ring-(--color-primary) focus:outline-none transition-all"
            id="title"
            placeholder="e.g., Project Phoenix Ideas"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label
            className="text-gray-700 dark:text-gray-200 text-sm font-medium leading-normal"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="bg-(--color-input-bg) border border-(--color-input-border) 
            w-full min-h-[240px] rounded-lg bg-(--color-input-bg) px-4 py-3
              placeholder-gray-400 dark:placeholder-gray-500
              focus:border-primary focus:ring-1 focus:ring-(--color-primary)
             focus:outline-none resize-none transition-all leading-relaxed
             text-white"
            id="description"
            placeholder="Write your thoughts here... capture everything before it's gone."
          ></textarea>
        </div>

        <div className="flex flex-col gap-3">
          <label
            className="text-gray-700 dark:text-gray-200 text-sm font-medium leading-normal"
            htmlFor="tags"
          >
            Tags
          </label>
          <div className="relative group">
            <span className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 material-symbols-outlined text-[20px]">
              sell
            </span>
            <input
              className="w-full rounded-lg border
               border-(--color-input-border)
                pl-10 pr-4 py-3
                text-zinc-50 placeholder-gray-400 
                dark:placeholder-gray-500 focus:border-(--color-primary)
                focus:ring-1 bg-(--color-surface-dark)
                focus:ring-(--color-primary) focus:outline-none transition-all duration-75"
              id="tags"
              placeholder="Add tags..."
              type="text"
              value={inputVal}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <p className="text-xs text-gray-500 px-1 mt-2">
              Press Enter or comma to create a tag
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <div
                key={tag}
                className={`${getClassNameByTag(
                  tag
                )} flex items-center gap-0.5 px-2 py-0.5 rounded-full cursor-pointer text-xs`}
              >
                <span className="font-semibold">#{tag}</span>
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="flex items-center justify-center p-0.5 rounded-full hover:bg-red-500/20 text-red-600 dark:text-red-400"
                >
                  <span className="material-symbols-outlined text-[12px]">
                    close
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-5 border-t border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-[#1A1A1A]">
        <label className="inline-flex items-center cursor-pointer group">
          <input
            className="form-checkbox h-4 w-4 rounded border-gray-300 dark:border-gray-600
             text-primary focus:ring-primary focus:ring-offset-0 bg-transparent
               accent-(--color-primary) transition duration-150 ease-in-out cursor-pointer"
            type="checkbox"
          />
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
            Save as template
          </span>
        </label>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-lg text-sm font-medium 
          text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent 
          border border-(--color-input-border)/40 hover:bg-gray-50
           dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white
            transition-all focus:outline-none focus:ring-2 focus:ring-gray-500
             focus:ring-offset-2 dark:focus:ring-(--color-primary)"
             onClick={onClose}
             >
            Cancel
          </button>
          <button 
          onClick={onSubmit}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary hover:bg-[#118a45] shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-surface-dark">
            <span className="material-symbols-outlined text-[18px]">save</span>
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
};

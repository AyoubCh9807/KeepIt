"use client";
import { CardFormProps } from "@/app/types/CardFormProps";
import { ChangeEvent, useEffect, useState } from "react";

export const NoteCardForm = ({
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
    if (tag.trim() && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputVal);
      setInputVal("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleRemoveTag = (unwantedTag: string) => {
    setTags(tags.filter((tag) => tag !== unwantedTag));
  };

  return (
    <div className="max-w-[480px]">
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
      ></div>

      <div className="relative z-50 w-full max-w-2xl bg-white dark:bg-(--color-surface-dark) rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border dark:border-[#333]">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-[#333]">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              Create New Note
            </h2>
            <p className="text-sm text-gray-500 dark:text-[#9db8a9]">
              Capture your thoughts and ideas quickly.
            </p>
          </div>
          <button className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#333] transition-colors focus:outline-none">
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="note-title"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              autoFocus
              className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-(--color-input-bg) border-transparent focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#9db8a9] text-base transition-all"
              id="note-title"
              placeholder="Enter note title..."
              type="text"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="note-desc"
            >
              Description
            </label>
            <textarea
              className="w-full min-h-[160px] p-4 rounded-lg bg-gray-50 dark:bg-(--color-input-bg) border-transparent focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#9db8a9] text-base resize-y transition-all"
              id="note-desc"
              placeholder="Write your thoughts here..."
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Tags
            </label>

            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="flex h-8 items-center justify-center gap-x-1.5 rounded-lg bg-(--color-primary)/20 dark:bg-(--color-surface-dark) pl-2.5 pr-3 border border-transparent dark:border-[#3c5346]"
                  >
                    <span className="material-symbols-outlined text-(--color-primary) dark:text-[#9db8a9] text-[18px]">
                      tag
                    </span>
                    <span className="text-(--color-primary) dark:text-white text-sm font-medium">
                      {tag}
                    </span>
                    <button className="ml-1 hover:text-red-400 text-gray-400 transition-colors flex items-center">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        close
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span
                  onClick={() => addTag(inputVal)}
                  className="material-symbols-outlined text-gray-400 dark:text-[#9db8a9] text-[20px]"
                >
                  add
                </span>
              </div>
              <input
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-[#1c2620] border border-gray-200 dark:border-[#3c5346] focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#9db8a9] text-sm transition-all"
                placeholder="Type to add tags..."
                type="text"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                value={inputVal}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-[#6b7c72]">
              Press Enter or Comma to create a new tag.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-gray-100 dark:border-[#333] bg-gray-50/50 dark:bg-black/10">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-(--color-primary) hover:bg-(--color-primary)/90 shadow-sm shadow-primary/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#1E1E1E]"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

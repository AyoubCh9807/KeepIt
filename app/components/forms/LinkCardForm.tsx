"use client";
import { getClassNameByTag } from "@/app/utils/getClassNameByTag";
import { useState, KeyboardEvent } from "react";
import { CardFormProps } from "@/app/types/CardFormProps";

export default function LinkCardForm({
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
}: CardFormProps) {
  const [tagInput, setTagInput] = useState("");

  // Add tag from input
  const handleAddTag = () => {
    const newTag = tagInput.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
    setTagInput("");
  };

  // Remove tag by index
  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // Handle Enter or comma
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className="font-sans">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #149f50 0%, transparent 50%)",
        }}
      />

      <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="w-full max-w-[600px] bg-[#1E1E1E] rounded-xl shadow-2xl border border-white/10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                link
              </span>
              Create Link
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors rounded-full p-1 hover:bg-white/5 focus:outline-none focus:bg-white/10"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="p-6 custom-scrollbar overflow-y-scroll flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-gray-200"
                htmlFor="url"
              >
                URL
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#9db8a9] group-focus-within:text-primary transition-colors text-xl">
                    public
                  </span>
                </div>
                <input
                  autoFocus
                  className="w-full bg-[#29382f] text-white placeholder-[#9db8a9] border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-lg pl-11 pr-4 py-3 text-base outline-none transition-all duration-200"
                  id="url"
                  placeholder="https://example.com/article"
                  type="url"
                  value={url}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUrl && setUrl(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-gray-200 flex gap-1"
                htmlFor="title"
              >
                Title <span className="text-red-400">*</span>
              </label>
              <input
                className="w-full bg-[#29382f] text-white placeholder-[#9db8a9] border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-base outline-none transition-all duration-200"
                id="title"
                placeholder="Enter link title"
                type="text"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-gray-200"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="w-full bg-[#29382f] text-white placeholder-[#9db8a9] border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-base outline-none min-h-[120px] resize-y transition-all duration-200"
                id="description"
                placeholder="Add a brief note about this link..."
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-200">
                draftTags
              </label>
              <div className="w-full bg-[#29382f] rounded-lg border border-transparent focus-within:border-(--color-primary) focus-within:ring-1 focus-within:ring-primary transition-all duration-200 p-2 flex flex-wrap gap-2 items-center min-h-[52px]">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`${getClassNameByTag(tag)} border 
                  border-primary/30 rounded-full px-3 py-1 text-sm
                   font-medium flex items-center gap-1`}
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(index)}
                      className="hover:text-white transition-colors focus:outline-none"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        close
                      </span>
                    </button>
                  </div>
                ))}
                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Add draftTags..."
                  className="bg-transparent border-none text-white placeholder-[#9db8a9] focus:ring-0 p-1 text-sm flex-1 min-w-[120px] outline-none h-full"
                  type="text"
                />
              </div>
              <p className="text-xs text-gray-500 px-1">
                Press Enter or comma to create a tag
              </p>
            </div>
          </div>

          <div className="px-6 py-5 border-t border-white/10 flex justify-end gap-3 bg-[#1E1E1E] rounded-b-xl">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-(--color-primary) hover:bg-[#128a45] active:bg-[#0f753a] transition-all shadow-lg shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] focus:ring-primary flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                check
              </span>
              Save Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

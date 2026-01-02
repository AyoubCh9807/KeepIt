import { CardFormProps } from "@/app/types/CardFormProps";
import { getClassNameByTag } from "@/app/utils/getClassNameByTag";
import { useState } from "react";

type CardFormPropsExtended = CardFormProps & {
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
}  

export const PDFCardForm = ({
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
  author, setAuthor
}: CardFormPropsExtended) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans">
      {/* Modal Container */}
      <div className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl shadow-2xl overflow-hidden border border-(--color-border-dark) bg-(--color-surface-dark)">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-(--color-border-dark) sticky top-0 bg-(--color-surface-dark) z-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-(--color-primary) text-3xl">
              picture_as_pdf
            </span>
            <h2 className="text-xl font-bold text-white">Create New PDF</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white rounded-lg p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 bg-(--color-surface-lighter)">
          {/* File Upload */}
          <div className="group relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-(--color-border-dark) bg-(--color-surface-lighter) py-10 px-6 hover:border-(--color-primary) hover:bg-(--color-primary)/5 transition-colors cursor-pointer">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="rounded-full bg-(--color-primary)/20 p-4">
                <span className="material-symbols-outlined text-(--color-primary) text-3xl">
                  cloud_upload
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold text-white">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-(--color-text-secondary)">
                  PDF files up to 25MB
                </p>
              </div>
              <button
                type="button"
                className="mt-2 rounded-lg bg-(--color-primary) px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-(--color-primary-hover) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2 transition-all"
              >
                Browse Files
              </button>
            </div>
            <input
              type="file"
              accept=".pdf"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Title */}
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-white" htmlFor="title">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                placeholder="e.g. Q4 Financial Report"
                type="text"
                className="block w-full rounded-lg bg-(--color-surface-lighter) border border-(--color-border-dark) p-3 text-sm text-white placeholder-(--color-text-secondary) focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) outline-none shadow-sm"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            {/* Author */}
            <div className="col-span-1 space-y-2">
              <label
                className="text-sm font-medium text-white"
                htmlFor="author"
              >
                Author
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="material-symbols-outlined text-(--color-text-secondary) text-[20px]">
                    person
                  </span>
                </div>
                <input
                  id="author"
                  placeholder="e.g. John Doe"
                  type="text"
                  className="block w-full rounded-lg bg-(--color-surface-lighter) border border-(--color-border-dark) p-3 pl-10 text-sm text-white placeholder-(--color-text-secondary) focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) outline-none shadow-sm"
                  value={title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setAuthor && setAuthor(e.target.value);
                  }}
                />
              </div>
            </div>

            {/* Tags */}
            <div className="col-span-1 space-y-2">
              <label className="text-sm font-medium text-white" htmlFor="tags">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 w-full min-h-[50px] rounded-lg bg-(--color-surface-lighter) border border-(--color-border-dark) px-2 py-2 focus-within:border-(--color-primary) focus-within:ring-1 focus-within:ring-(--color-primary) cursor-text">
                {tags?.map((tag) => (
                  <div
                    key={tag}
                    className={`
                        flex items-center gap-1 
                     px-2 py-0.5 rounded text-xs font-medium select-none
                     ${getClassNameByTag(tag)}
                        `}
                  >
                    <span>#{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="flex items-center justify-center w-4 h-4 rounded hover:bg-(--color-primary)/30 transition-colors focus:outline-none"
                    >
                      <span className="material-symbols-outlined text-[12px] leading-none">
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
                  className="bg-transparent border-none outline-none text-sm text-white flex-1 min-w-[60px] p-1 h-6"
                />
              </div>

              <p className="text-xs text-(--color-text-secondary)">
                Press Enter or comma to add a tag
              </p>
            </div>

            {/* Description */}
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label
                className="text-sm font-medium text-white"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Brief summary of the document..."
                rows={4}
                className="block w-full resize-none rounded-lg bg-(--color-surface-lighter) border border-(--color-border-dark) p-3 text-sm text-white placeholder-(--color-text-secondary) focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) outline-none shadow-sm"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-(--color-border-dark) bg-(--color-surface-lighter) px-6 py-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="rounded-lg border border-(--color-border-dark) px-5 py-2.5 text-sm font-medium text-white hover:bg-(--color-surface-dark) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-(--color-primary) px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-(--color-primary-hover) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">save</span>
            Save PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export const ItemFilterBar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center px-6 py-4 border-b border-(--color-border-dark) bg-(--color-surface-dark)">
      <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
        <span className="text-sm text-gray-500 mr-2 font-medium">Filter:</span>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-(--color-bg) border border-(--color-border-dark) rounded-md text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
          <span className="material-symbols-outlined text-[18px]">
            category
          </span>
          Type
          <span className="material-symbols-outlined text-[16px] text-gray-500">
            expand_more
          </span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-(--color-bg) border border-(--color-border-dark) rounded-md text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
          <span className="material-symbols-outlined text-[18px]">label</span>
          Tag
          <span className="material-symbols-outlined text-[16px] text-gray-500">
            expand_more
          </span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-(--color-bg) border border-(--color-border-dark) rounded-md text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
          <span className="material-symbols-outlined text-[18px]">
            calendar_month
          </span>
          Date
          <span className="material-symbols-outlined text-[16px] text-gray-500">
            expand_more
          </span>
        </button>
        <div className="h-6 w-px bg-(--color-border-dark) mx-2"></div>
        <button className="text-xs text-(--color-primary) hover:text-green-400 font-medium">
          Clear all
        </button>
      </div>
      <div className="flex items-center gap-1 bg-(--color-bg) border border-(--color-border-dark) rounded-lg p-1">
        <button className="p-1.5 rounded bg-white/10 text-white shadow-sm">
          <span className="material-symbols-outlined text-[20px]">
            grid_view
          </span>
        </button>
        <button className="p-1.5 rounded text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-[20px]">
            view_list
          </span>
        </button>
      </div>
    </div>
  );
};

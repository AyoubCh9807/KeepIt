"use client";
interface ItemsBarProps {
  onPopupToggle: () => void;
}

export const ItemsBar = ({ onPopupToggle }: ItemsBarProps) => {
  return (
    <header className="h-16 border-b border-(--color-border-dark) bg-(--color-surface-dark)/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>My Boards</span>
            <span className="material-symbols-outlined text-[10px]">
              chevron_right
            </span>
            <span>Personal</span>
          </div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            Productivity Tools
            <span className="material-symbols-outlined text-gray-500 text-[18px] cursor-pointer hover:text-white">
              edit
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-(--color-primary) transition-colors">
            <span className="material-symbols-outlined text-[20px]">
              search
            </span>
          </span>
          <input
            className="h-9 w-64 bg-(--color-bg) border border-(--color-border-dark) rounded-lg pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) outline-none transition-all"
            placeholder="Search in board..."
            type="text"
          />
        </div>
        <div className="h-6 w-px bg-(--color-border-dark) hidden md:block"></div>
        <button className="flex items-center justify-center p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="flex items-center gap-2 h-9 px-4 bg-(--color-primary) hover:bg-green-600 text-white text-sm font-semibold rounded-lg shadow-sm shadow-(--color-primary)/20 transition-all active:scale-95">
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span className="hidden sm:inline" onClick={onPopupToggle}>
            Add Item
          </span>
        </button>
      </div>
    </header>
  );
};

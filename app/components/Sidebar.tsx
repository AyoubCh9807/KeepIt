export const Sidebar = () => {
  return (
    <aside className="w-64 font-sans bg-(--color-bg) border-r border-(--color-border-dark) flex flex-col shrink-0 z-20">
      <div className="h-16 flex items-center px-6 border-b border-(--color-border-dark) bg-[#0e0e0e]">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-(--color-primary)/20 text-(--color-primary)">
            <span className="material-symbols-outlined">bookmarks</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            KeepIt
          </span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
        <div>
          <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Library
          </h3>
          <div className="space-y-1">
            <a
              className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-lg bg-(--color-primary)/10 text-(--color-primary)"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                dashboard
              </span>
              All Boards
            </a>
            <a
              className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                schedule
              </span>
              Recent
            </a>
            <a
              className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
              Favorites
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between px-2 mb-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              My Boards
            </h3>
            <button className="text-gray-500 hover:text-(--color-primary) transition-colors">
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>
          <div className="space-y-1">
            <a
              className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-white bg-(--color-bg) border border-(--color-border-dark) rounded-lg shadow-sm"
              href="#"
            >
              <span className="w-2 h-2 rounded-full bg-(--color-secondary)"></span>
              Productivity Tools
            </a>
            <a
              className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              href="#"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Design Inspiration
            </a>
            <a
              className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              href="#"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Reading List
            </a>
            <a
              className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              href="#"
            >
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Recipes
            </a>
          </div>
        </div>
        <div>
          <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2 px-2">
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5 hover:border-(--color-primary)/50 cursor-pointer transition-colors">
              #work
            </span>
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5 hover:border-(--color-primary)/50 cursor-pointer transition-colors">
              #ideas
            </span>
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5 hover:border-(--color-primary)/50 cursor-pointer transition-colors">
              #important
            </span>
          </div>
        </div>
      </nav>
      <div className="p-4 border-t border-(--color-border-dark)">
        <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/5 transition-colors">
          <div
            className="h-8 w-8 rounded-full bg-gray-700 bg-cover border border-(--color-border-dark)"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQAo3D4FkKPSGIvxHMIzoGAk2brOBZBZAmoNKfH_SQm48ET8TkGsqd1hSqOeNF0BjoWrWGTSV5kbjz6-J1aQHg7AHqZRG45PdoEfR292lf97_30v7gQOuXJGjSHIVHlVi4bfYfEUrlvaqiE8iJ5UiM7lG1HpC9JrZyCG8oCMYcOMuw8A_se7SIIE0nWtUXeDGde80902pNnMgEyOkC2Tbl-AOgXjqrJBydGJJOanKZK7SHn9xReai1b66Z8BKtxNPAQ4vp_3yuNg")',
            }}
          ></div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-white">Alex Morgan</p>
            <p className="text-xs text-gray-500">Free Plan</p>
          </div>
          <span className="material-symbols-outlined text-gray-500 text-[20px]">
            settings
          </span>
        </button>
      </div>
    </aside>
  );
};

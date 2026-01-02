interface SidebarSectionProps {
  title: string;
  items: { label: string; icon?: string; color?: string }[];
  activeItem: string;
  onItemClick: (label: string) => void;
  showAddButton?: boolean;
  isTagSection?: boolean;
}

export const SidebarSection = ({
  title,
  items,
  activeItem,
  onItemClick,
  showAddButton = false,
  isTagSection = false,
}: SidebarSectionProps) => {
  return (
    <div>
      <div className="flex items-center justify-between px-2 mb-2">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
        {showAddButton && (
          <button className="text-gray-500 hover:text-(--color-primary) transition-colors">
            <span className="material-symbols-outlined text-[16px]">add</span>
          </button>
        )}
      </div>

      <div className="space-y-1 flex flex-col flex-wrap gap-2">
        {items.map((item, i) =>
          isTagSection ? (
            <span
              key={i}
              onClick={() => onItemClick(item.label)}
              className={`px-2 py-1 text-xs rounded-md border cursor-pointer transition-colors ${
                activeItem === item.label
                  ? "bg-(--color-primary) text-white border-(--color-primary)"
                  : "bg-white/5 text-gray-400 border-white/5 hover:border-(--color-primary)/50"
              }`}
            >
              {item.label}
            </span>
          ) : (
            <a
              key={i}
              href="#"
              onClick={() => onItemClick(item.label)}
              className={`flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeItem === item.label
                  ? "bg-(--color-primary)/10 text-(--color-primary)"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon && <span className="material-symbols-outlined text-[20px]">{item.icon}</span>}
              {item.color && <span className={`w-2 h-2 rounded-full ${item.color}`}></span>}
              {item.label}
            </a>
          )
        )}
      </div>
    </div>
  );
};

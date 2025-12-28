import { CreateNewCardProps } from "@/app/types/CreateNewCardProps";

export const CreateNewCard = ({onClick}: CreateNewCardProps) => {
  return (
    <div 
    onClick={onClick}
    className="group flex flex-col items-center justify-center bg-transparent border-2 border-dashed
     border-(--color-border-dark) rounded-xl p-5 hover:border-(--color-primary)/50 hover:bg-white/5 transition-all duration-200 cursor-pointer min-h-55">
      <div className="size-12 rounded-full bg-(--color-bg) border border-(--color-border-dark) flex items-center justify-center text-gray-400 group-hover:text-(--color-primary) group-hover:scale-110 transition-all mb-3">
        <span className="material-symbols-outlined text-[24px]">add</span>
      </div>
      <span className="text-sm font-medium text-gray-400 group-hover:text-white">
        Create New Item
      </span>
    </div>
  );
};

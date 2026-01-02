interface SidebarUserCardProps {
  username: string;
}

export const SidebarUserCard = ({ username }: SidebarUserCardProps) => {
  return (
    <div className="p-4 border-t border-(--color-border-dark)">
      <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/5 transition-colors">
        <div
          className="h-8 w-8 rounded-full bg-gray-700 bg-cover border border-(--color-border-dark)"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQAo3D4FkKPSGIvxHMIzoGAk2brOBZBZAmoNKfH_SQm48ET8TkGsqd1hSqOeNF0BjoWrWGTSV5kbjz6-J1aQHg7AHqZRG45PdoEfR292lf97_30v7gQOuXJGjSHIVHlVi4bfYfEUrlvaqiE8iJ5UiM7lG1HpC9JrZyCG8oCMYcOMuw8A_se7SIIE0nWtUXeDGde80902pNnMgEyOkC2Tbl-AOgXjqrJBydGJJOanKZK7SHn9xReai1b66Z8BKtxNPAQ4vp_3yuNg")',
          }}
        />
        <div className="flex-1 text-left">
          <p className="text-sm font-medium text-white">{username}</p>
          <p className="text-xs text-gray-500">Free Plan</p>
        </div>
        <span className="material-symbols-outlined text-gray-500 text-[20px]">settings</span>
      </button>
    </div>
  );
};

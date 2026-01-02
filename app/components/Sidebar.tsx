"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { SidebarSection } from "./SidebarSection";
import { SidebarUserCard } from "./SidebarUserCard";
interface SidebarItem {
  label: string;
  icon?: string;
  color?: string;
  type?: "board" | "tag" | "library";
}

export const Sidebar = () => {
  const [username, setUsername] = useState<string>("");
  const [activeItem, setActiveItem] = useState<string>("All Boards");
  const router = useRouter();

  // Fetch user
  const getCurrentUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.log(error);
      return;
    }
    setUsername(data.user?.user_metadata.username || "");
  };

  useEffect(() => {
    const verifyAuthentification = async () => {
      const user = getCurrentUser();
      if (!user) router.push("/auth-portal");
    };
    verifyAuthentification();
  }, []);

  // Sidebar data
  const libraryItems: SidebarItem[] = [
    { label: "All Boards", icon: "dashboard" },
    { label: "Recent", icon: "schedule" },
    { label: "Favorites", icon: "favorite" },
  ];

  const myBoards: SidebarItem[] = [
    { label: "Productivity Tools", color: "bg-(--color-secondary)" },
    { label: "Design Inspiration", color: "bg-purple-500" },
    { label: "Reading List", color: "bg-blue-500" },
    { label: "Recipes", color: "bg-red-500" },
  ];

  const tags: SidebarItem[] = [
    { label: "#work" },
    { label: "#ideas" },
    { label: "#important" },
  ];

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <aside className="w-64 font-sans bg-(--color-bg) border-r border-(--color-border-dark) flex flex-col shrink-0 z-20">
      {/* Logo */}
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

      {/* Nav Sections */}
      <nav className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
        {/* Library */}
        <SidebarSection
          title="Library"
          items={libraryItems}
          activeItem={activeItem}
          onItemClick={handleItemClick}
        />

        {/* My Boards */}
        <SidebarSection
          title="My Boards"
          items={myBoards}
          activeItem={activeItem}
          onItemClick={handleItemClick}
          showAddButton
        />

        {/* Tags */}
        <SidebarSection
          title="Tags"
          items={tags}
          activeItem={activeItem}
          onItemClick={handleItemClick}
          isTagSection
        />
      </nav>

      {/* User card */}
      <SidebarUserCard username={username || "Alex Morgan"} />
    </aside>
  );
};

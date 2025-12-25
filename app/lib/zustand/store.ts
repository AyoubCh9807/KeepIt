import { create } from "zustand";
import { FrontendUserStore } from "@/app/types/FrontendUserStore";

export const useUserStore = create<FrontendUserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

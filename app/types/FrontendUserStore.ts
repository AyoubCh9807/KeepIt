import { FrontendUser } from "./FrontendUser";

export type FrontendUserStore = {
  user: FrontendUser | null;
  setUser: (user: FrontendUser | null) => void;
};

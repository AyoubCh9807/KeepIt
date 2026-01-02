import { Card } from "./Card";

export type RegularCardProps = {
  title: string;
  url?: string;
  description: string;
  tags: string[];
  date: string;
  onFavourite: (card: Card) => void;
  onCopyLink: () => void;
  onReport: () => void;
};

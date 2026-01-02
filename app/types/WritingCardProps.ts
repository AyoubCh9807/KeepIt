import { Card } from "./Card";

export type WritingCardProps = {
  title: string;
  description: string;
  tags: string[];
  date: string;
  onFavourite: (card: Card) => void;
  onCopyLink: () => void;
  onReport: () => void;
};

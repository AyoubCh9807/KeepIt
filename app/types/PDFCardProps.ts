import { Card } from "./Card";

export type PDFCardProps = {
  title: string; // Name of the PDF
  description?: string; // Optional description or summary
  author?: string; // Optional author
  size?: string; // File size, e.g., "2.3 MB"
  date?: string; // Upload or creation date
  tags?: string[]; // Optional tags/categories
  url?: string; // Link to open or download the PDF
  onFavourite: (card: Card) => void;
  onCopyLink: () => void;
  onReport: () => void;
};

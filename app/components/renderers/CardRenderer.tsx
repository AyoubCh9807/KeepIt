//cards
import { DraftCard } from "../cards/DraftCard";
import { LinkCard } from "../cards/LinkCard";
import { NoteCard } from "../cards/NoteCard";
import { PDFCard } from "../cards/PDFCard";
import { VideoCard } from "../cards/VideoCard";

//types
import { Card } from "@/app/types/Card";

interface CardRendererProps {
  cardType: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  url?: string;
  onFavourite: (card: Card) => void;
  onCopyLink: () => void;
  onReport: () => void;
}

export const CardRenderer = ({
  cardType,
  title,
  description,
  tags,
  date,
  url,
  onFavourite,
  onCopyLink,
  onReport,
}: CardRendererProps) => {
  switch (cardType.toLowerCase()) {
    case "linkcard": {
      return (
        <LinkCard
          title={title}
          description={description}
          tags={tags}
          date={date}
          url={url ?? "/"}
          onFavourite={onFavourite}
          onCopyLink={onCopyLink}
          onReport={onReport}
        />
      );
    }
    case "notecard": {
      return (
        <NoteCard
          title={title}
          description={description}
          tags={tags}
          date={date}
          onFavourite={onFavourite}
          onCopyLink={onCopyLink}
          onReport={onReport}
        />
      );
    }
    case "draftcard": {
      return (
        <DraftCard
          title={title}
          description={description}
          tags={tags}
          date={date}
          onFavourite={onFavourite}
          onCopyLink={onCopyLink}
          onReport={onReport}
        />
      );
    }
    case "videocard": {
      return (
        <VideoCard
          title={title}
          description={description}
          tags={tags}
          date={date}
          url={url ?? "/"}
          onFavourite={onFavourite}
          onCopyLink={onCopyLink}
          onReport={onReport}
        />
      );
    }
    case "pdfcard": {
      return (
        <PDFCard
          title={title}
          description={description}
          tags={tags}
          date={date}
          url={url ?? "/"}
          onFavourite={onFavourite}
          onCopyLink={onCopyLink}
          onReport={onReport}
        />
      );
    }
    default: {
      return (
        <LinkCard
          title={title}
          description={description}
          tags={tags}
          date={date}
          url={url ?? "/"}
          onFavourite={onFavourite}
          onCopyLink={onCopyLink}
          onReport={onReport}
        />
      );
    }
  }
};

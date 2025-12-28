import { DraftCard } from "./DraftCard";
import { LinkCard } from "./LinkCard";
import { NoteCard } from "./NoteCard";
import { PDFCard } from "./PDFCard";
import { VideoCard } from "./VideoCard";

interface CardRendererProps {
  cardType: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  url?: string;
}

export const CardRenderer = ({
  cardType,
  title,
  description,
  tags,
  date,
  url,
}: CardRendererProps) => {
  switch (cardType.toLowerCase()) {
    case "notecard": {
      return;
      <NoteCard
        title={title}
        description={description}
        tags={tags}
        date={date}
      />;
      break;
    }
    case "draftcard": {
      return;
      <DraftCard
        title={title}
        description={description}
        tags={tags}
        date={date}
      />;
      break;
    }
    case "videocard": {
      return;
      <VideoCard
        title={title}
        description={description}
        tags={tags}
        date={date}
        url={url ?? "/"}
      />;
      break;
    }
    case "notecard": {
      return;
      <PDFCard
        title={title}
        description={description}
        tags={tags}
        date={date}
        url={url ?? "/"}
      />;
      break;
    }
    case "notecard": {
      return;
      <LinkCard
        title={title}
        description={description}
        tags={tags}
        date={date}
        url={url ?? "/"}
      />;
      break;
    }
  }
};

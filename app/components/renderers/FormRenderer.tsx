import LinkCardForm from "../forms/LinkCardForm";
import { NoteCardForm } from "../forms/NoteCardForm";
import { DraftCardForm } from "../forms/DraftCardForm";
import { PDFCardForm } from "../forms/PDFCardForm";
import { VideoCardForm } from "../forms/VideoCardForm";

interface FormRendererProps {
  cardType: string;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  description: string;
  tags: string[];
  url: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
}

export const FormRenderer = ({
  cardType,
  onClose,
  onSubmit,
  title,
  description,
  tags,
  url,
  setTitle,
  author,
  setDescription,
  setTags,
  setUrl,
  setAuthor
}: FormRendererProps) => {
  switch (cardType.toLowerCase()) {
    case "notecard": {
      return (
        <NoteCardForm
          onClose={onClose}
          onSubmit={onSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          tags={tags}
          setTags={setTags}
          url={url}
          setUrl={setUrl}
        />
      );
    }
    case "linkcard": {
      return (
        <LinkCardForm
          onClose={onClose}
          onSubmit={onSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          tags={tags}
          setTags={setTags}
          url={url}
          setUrl={setUrl}
        />
      );
    }
    case "draftcard": {
      return (
        <DraftCardForm
          onClose={onClose}
          onSubmit={onSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          tags={tags}
          setTags={setTags}
          url={url}
          setUrl={setUrl}
        />
      );
    }
    case "pdfcard": {
      return (
        <PDFCardForm
          onClose={onClose}
          onSubmit={onSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          tags={tags}
          setTags={setTags}
          url={url}
          setUrl={setUrl}
          author={author}
          setAuthor={setAuthor}
        />
      );
    }
    case "videocard": {
      return (
        <VideoCardForm
          onClose={onClose}
          onSubmit={onSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          tags={tags}
          setTags={setTags}
          url={url}
          setUrl={setUrl}
        />
      );
    }
    default: {
      return (
        <LinkCardForm
          onClose={onClose}
          onSubmit={onSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          tags={tags}
          setTags={setTags}
          url={url}
          setUrl={setUrl}
        />
      );
    }
  }
};

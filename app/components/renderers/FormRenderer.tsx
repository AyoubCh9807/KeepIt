import LinkCardForm from "../forms/LinkCardForm";
import { NoteCardForm } from "../forms/NoteCardForm";
import { DraftCardForm } from "../forms/DraftCardForm";
import { PDFCardForm } from "../forms/PDFCardForm";
import { VideoCardForm } from "../forms/VideoCardForm";

export const FormRenderer = ({
  cardType,
  onClose,
  onSubmit,
}: {
  cardType: string;
  onClose: () => void;
  onSubmit: () => void;
}) => {
  switch (cardType.toLowerCase()) {
    case "notecard": {
      return <NoteCardForm onClose={onClose} onSubmit={onSubmit} />;
    }
    case "linkcard": {
      return <LinkCardForm onClose={onClose} onSubmit={onSubmit} />;
    }
    case "draftcard": {
      return <DraftCardForm onClose={onClose} onSubmit={onSubmit} />;
    }
    case "pdfcard": {
      return <PDFCardForm onClose={onClose} onSubmit={onSubmit} />;
    }
    case "videocard": {
      return <VideoCardForm onClose={onClose} onSubmit={onSubmit} />;
    }
    default: {
      return <LinkCardForm onClose={onClose} onSubmit={onSubmit} />;
    }
  }
};

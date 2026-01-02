export interface CardFormProps {
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setUrl?: React.Dispatch<React.SetStateAction<string>>;
}

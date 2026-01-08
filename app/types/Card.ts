export type Card = {
  title: string;
  description: string;
  tags: string[];
  type: string;
  url?: string;
  date?: string;
  id?: string // Id will be mandatory in the future, this is just a demo
};

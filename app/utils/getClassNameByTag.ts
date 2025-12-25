import { Tag } from "../types/Tag";
// styles/tagVariants.ts

export const TAG_TECH =
  "bg-blue-500/10 text-blue-400 border border-blue-500/20";

export const TAG_AI =
  "bg-purple-500/10 text-purple-400 border border-purple-500/20";

export const TAG_DEV = "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";

export const TAG_DESIGN =
  "bg-pink-500/10 text-pink-400 border border-pink-500/20";

export const TAG_WORK =
  "bg-orange-500/10 text-orange-400 border border-orange-500/20";

export const TAG_IMPORTANT =
  "bg-red-500/10 text-red-400 border border-red-500/20";

export const TAG_GAMING =
  "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";

export const TAG_STUDY =
  "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20";

export const TAG_IMPROVEMENT =
  "bg-lime-500/10 text-lime-400 border border-lime-500/20";

export const TAG_TRICKS =
  "bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20";

export const TAG_TIPS = "bg-sky-500/10 text-sky-400 border border-sky-500/20";

export const TAGS = {
  tech: TAG_TECH,
  ai: TAG_AI,
  dev: TAG_DEV,
  design: TAG_DESIGN,
  work: TAG_WORK,
  important: TAG_IMPORTANT,
  gaming: TAG_GAMING,
  study: TAG_STUDY,
  improvement: TAG_IMPROVEMENT,
  tricks: TAG_TRICKS,
  tips: TAG_TIPS,
};

export const getClassNameByTag = (tag: Tag) => TAGS[tag];

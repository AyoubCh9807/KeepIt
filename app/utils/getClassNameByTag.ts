export const TAG_CLASSES = [
  "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  "bg-red-500/10 text-red-400 border border-red-500/20",
  "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
  "bg-lime-500/10 text-lime-400 border border-lime-500/20",
  "bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20",
  "bg-sky-500/10 text-sky-400 border border-sky-500/20",
];

export function getClassNameByTag(tag: string) {
  if (!tag) return TAG_CLASSES[0]; // fallback
  const first = tag.charCodeAt(0);
  const last = tag.charCodeAt(tag.length - 1);
  const len = tag.length;
  return TAG_CLASSES[(first + last + len) % TAG_CLASSES.length];
}

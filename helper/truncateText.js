export const truncateText = (str) => {
  if (str?.length < 17) return str;
  return str?.substring(0, 120) + "...";
};

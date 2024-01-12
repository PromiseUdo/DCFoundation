export default function formatNumber(number) {
  if (typeof number !== "number") {
    return "Invalid input";
  }

  if (number < 1000) {
    return number.toString();
  }
  const formattedNumber = Math.floor(number / 1000);
  return `${formattedNumber}K`;
}

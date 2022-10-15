export default function formatTableDate(date: string) {
  return new Date(date).toLocaleString().substring(0, 10);
}

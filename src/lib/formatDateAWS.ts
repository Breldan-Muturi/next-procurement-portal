export default function formatDateAws(date: string) {
  return new Date(date).toISOString().substring(0, 10);
}

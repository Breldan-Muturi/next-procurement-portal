export default function formatCurrency(currency: number) {
  return currency.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

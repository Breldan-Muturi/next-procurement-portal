export default function useAcceptedDates() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const twoYearsPrior = new Date(year - 2, month, day);
  const oneYearPrior = new Date(year - 1, month, day);
  const oneYearLater = new Date(year + 1, month, day);
  const twoYearsLater = new Date(year + 2, month, day);
  return {
    currentDate,
    twoYearsLater,
    twoYearsPrior,
    oneYearPrior,
    oneYearLater,
  };
}

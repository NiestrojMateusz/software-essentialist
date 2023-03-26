export const militaryTimeValidator = (time: string): boolean => {
  if (!time.includes("-")) return false;

  const [from, to] = time.replace(" ", "").split('-');

  if (!from || !to) return false;

  const timeFormatRegex = new RegExp(/\d{2}:\d{2}/);

  if (!timeFormatRegex.test(from) || !timeFormatRegex.test(to)) return false;

  const fromDate = new Date(`01-01-2022 ${from}`).getTime();
  const toDate  = new Date(`01-01-2022 ${to}`).getTime();


  if (isNaN(fromDate) || isNaN(toDate)) return false;

  return true;
}
export const militaryTimeValidator = (time: string): boolean => {
  if (!time.includes("-")) return false;

  const [from, to] = time.replace(" ", "").split('-');

  if (!from || !to) return false;

  if (!isCorrectTimeFormat(from) || !isCorrectTimeFormat(to)) return false;

  const fromDate = new Date(`01-01-2022 ${from}`).getTime();
  const toDate  = new Date(`01-01-2022 ${to}`).getTime();
  const isFromDateBeforeToDate = fromDate < toDate;


  if (isNaN(fromDate) || isNaN(toDate) || !isFromDateBeforeToDate) return false;

  return true;
}

export const isCorrectTimeFormat = (time: string, formatRegexp = /\d{2}:\d{2}/) => {
  return formatRegexp.test(time)
}
export const militaryTimeValidator = (time: string): boolean => {
  if (!time.includes("-")) return false;

  const [from, to] = time.replace(" ", "").split('-');

  if (!from || !to) return false;

  if (from.length < 4) return false;

  return true;
}
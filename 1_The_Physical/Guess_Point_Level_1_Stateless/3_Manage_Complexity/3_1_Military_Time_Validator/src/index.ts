export const militaryTimeValidator = (time: string): boolean => {
  if (!time.includes("-")) return false;

  const [from, to] = time.split('-');

  if (!from || !to) return false;

  return true;
}
export const militaryTimeValidator = (time: string): boolean => {
  if (!time.includes("-")) return false;

  return true;
}
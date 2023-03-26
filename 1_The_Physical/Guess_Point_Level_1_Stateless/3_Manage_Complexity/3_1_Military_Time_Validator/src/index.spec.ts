import { militaryTimeValidator } from "./index";

describe('military time validator', () => {
  it('should fail for empty input', () => {
     expect(militaryTimeValidator("")).toBeFalsy();
  })

  it('should fail when hyphen separator is missing', () => {
    expect(militaryTimeValidator("12:00 16:00")).toBeFalsy();
  });

  it('should fail for missing "from" part "14:00 -"', () => {
    expect(militaryTimeValidator("14:00 -")).toBeFalsy();
  })

  it('should fail for missing "to" part "- 16:00"', () => {
    expect(militaryTimeValidator("14:00 -")).toBeFalsy();
  })

  it.each([
    "0",
    "00",
    "000",
    "0000",
    "00000",
    "::::",
    "0:00",
    ":00",
  ])('should fail for invalid "from" part format like "%s - 14:00"', (from) => {
    expect(militaryTimeValidator(`${from} - 14:00`)).toBeFalsy();
  })

  it.each([
    "0",
    "00",
    "000",
    "0000",
    "00000",
    "::::",
    "0:00",
    ":00",
  ])('should fail for invalid "to" part format like "14:00 - %s"', (to) => {
    expect(militaryTimeValidator(`14:00 - ${to}`)).toBeFalsy();
  })

  it.each([
    "14:00 - 16:00",
    "01:12 - 14:32",
    "22:00 - 23:12"
  ])('should pass for correct military time string as %s', (time) => {
    expect(militaryTimeValidator(time)).toBeTruthy();
  })

  it('should fail for incorrect military time string as "25:00 - 12:23"', () => {
    expect(militaryTimeValidator("25:00 - 12:23")).toBeFalsy();
  });
})

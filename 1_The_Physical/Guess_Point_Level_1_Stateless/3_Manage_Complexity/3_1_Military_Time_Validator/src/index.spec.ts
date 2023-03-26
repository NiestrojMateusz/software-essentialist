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

  it('should pass for correct military time string as "14:00 - 16:00"', () => {
    expect(militaryTimeValidator("14:00 - 16:00")).toBeTruthy();
  })
})

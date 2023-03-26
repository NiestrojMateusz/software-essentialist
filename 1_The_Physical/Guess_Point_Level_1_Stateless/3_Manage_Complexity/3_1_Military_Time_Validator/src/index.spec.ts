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

  it('should fail for invalid "from" length part like "0 - 14:00"', () => {
    expect(militaryTimeValidator("0 - 14:00")).toBeFalsy();
  })

  it('should fail for invalid "from" length part like "00 - 14:00"', () => {
    expect(militaryTimeValidator("00 - 14:00")).toBeFalsy();
  })

  it('should fail for invalid "from" length part like "000 - 14:00"', () => {
    expect(militaryTimeValidator("000 - 14:00")).toBeFalsy();
  })
})

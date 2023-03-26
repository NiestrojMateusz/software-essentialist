import { militaryTimeValidator } from "./index";

describe('military time validator', () => {
  it('should fail for empty input', () => {
     expect(militaryTimeValidator("")).toBeFalsy();
  })

  it('should fail when hyphen separator is missing', () => {
    expect(militaryTimeValidator("12:00 16:00")).toBeFalsy();
  });

})

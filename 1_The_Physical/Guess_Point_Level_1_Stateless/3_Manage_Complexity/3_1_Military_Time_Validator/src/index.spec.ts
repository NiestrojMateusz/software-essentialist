import { militaryTimeValidator } from "./index";

describe('military time validator', () => {
  it('should fail for empty input', () => {
     expect(militaryTimeValidator("")).toBeFalsy();
  })



})

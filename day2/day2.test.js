const { debugPasswords, charAtPos } = require("./day2");

const mock = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

describe('debugPasswords function', () => {
  it("should return correct for 1st mock", () => {
    const passwords = debugPasswords(mock[0]);
    expect(passwords.correct).toBe(1);
  });

  it("should return incorrect for 2st mock", () => {
    const passwords = debugPasswords(mock[1]);
    expect(passwords.incorrect).toBe(1);
  });

  it("should return correct 2 and incorrect 1 for mock", () => {
    const { correct, incorrect } = debugPasswords(mock);
    expect(correct).toBe(2);
    expect(incorrect).toBe(1);
  });
});
 
describe('charPos function', () => {
  test("should return correct for 1st mock", () => {
    const { correct, incorrect } = charAtPos(mock[0]);
    expect(correct).toBe(1);
    expect(incorrect).toBe(0);
  });

  test("should return incorrect for 2st mock", () => {
    const { correct, incorrect } = charAtPos(mock[1]);
    expect(correct).toBe(0);
    expect(incorrect).toBe(1);
  });

  test("should return correct 1 and incorrect 2 for mock", () => {
    const { correct, incorrect } = charAtPos(mock);
    expect(correct).toBe(1);
    expect(incorrect).toBe(2);
  });
});

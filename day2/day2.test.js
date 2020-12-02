const { expect } = require("@jest/globals");
const { debugPasswords } = require("./day2");

const mock = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

it("should return correct for 1st mock", () => {
  const passwords = debugPasswords(mock[0]);
  expect(passwords.correct).toBe(1);
});

it("should return incorrect for 2st mock", () => {
  const passwords = debugPasswords(mock[1]);
  expect(passwords.incorrect).toBe(1);
});

it.only("should return correct 2 and incorrect 1 for mock", () => {
  const {correct, incorrect} = debugPasswords(mock);
  expect(correct).toBe(2);
  expect(incorrect).toBe(1);
});

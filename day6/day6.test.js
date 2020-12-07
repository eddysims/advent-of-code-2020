const { customsForms, exactCustomsForms } = require("./day6");
const data = require('./data');

const mock = `
abcx
abcy
abcz
`;

const mock2 = `
abc

a
b
c

ab
ac

a
a
a
a

b
`;

test("mock 1 equals 6", () => {
  expect(customsForms(mock)).toBe(6);
});

test("mock 2 equals 11", () => {
  expect(customsForms(mock2)).toBe(11);
});

test("mock 2 equals 6", () => {
    expect(exactCustomsForms(mock2)).toBe(6);
  });

console.log(customsForms(data))
console.log(exactCustomsForms(data))
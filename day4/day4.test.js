const { expect } = require('@jest/globals');
const { mock1, mock2, mock3 } = require('./mock');
const data = require('./data');
const { countValidPassports } = require('./day4');

it('should have 2 valid, 2 invalid', () => {
  const answer = countValidPassports(mock1);
  expect(answer.valid).toBe(2);
  expect(answer.invalid).toBe(2);
});

it('mock 2 should be all invalid', () => {
  const answer = countValidPassports(mock2);
  expect(answer.valid).toBe(0);
  expect(answer.invalid).toBe(4);
});

it('mock 3 should be all valid', () => {
  const answer = countValidPassports(mock3);
  expect(answer.valid).toBe(4);
  expect(answer.invalid).toBe(0);
});

it('should give me the answer for day4', () => {
  // eslint-disable-next-line no-console
  console.log(countValidPassports(data));
});

const { expect } = require('@jest/globals');
const day1 = require('./index');

const mock = [1721, 979, 366, 299, 675, 1456];

test('twoSum should return the correct value', () => {
  expect(day1.twoSum(mock, 2020)).toBe(514579);
});

test('threeSum should return the correct value', () => {
  expect(day1.threeSum(mock, 2020)).toBe(241861950);
});

/* eslint-disable no-console */
const data = require('./data');
const { countTrees } = require('./day3');

const mock = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#',
];

it('should return 7 for demo', () => {
  expect(countTrees(mock)).toBe(7);
});

it('be 2 for Right 1, down 1.', () => {
  expect(countTrees(mock, 1, 1)).toBe(2);
});

it('be 2 for Right 3, down 1.', () => {
  expect(countTrees(mock, 3, 1)).toBe(7);
});

it('be 2 for Right 5, down 1.', () => {
  expect(countTrees(mock, 5, 1)).toBe(3);
});

it('be 2 for Right 7, down 1.', () => {
  expect(countTrees(mock, 7, 1)).toBe(4);
});

it('be 2 for Right 1, down 2.', () => {
  expect(countTrees(mock, 1, 2)).toBe(2);
});

it('gives me the question answers', () => {
  console.log('part 1', countTrees(data));

  const part2 = [
    countTrees(data, 1, 1),
    countTrees(data, 3, 1),
    countTrees(data, 5, 1),
    countTrees(data, 7, 1),
    countTrees(data, 1, 2),
  ].reduce((a, b) => a * b);

  console.log('part 2', part2);
  expect(true).toBeTruthy();
});

const { getPlaneSeat } = require('./day5');
const data = require('./data');

const mock1 = 'FBFBBFFRLR';
const mock2 = 'BFFFBBFRRR';
const mock3 = 'FFFBBBFRRR';
const mock4 = 'BBFFBBFRLL';

test('mock 1', () => { expect(getPlaneSeat(mock1)).toBe(357); });
test('mock 2', () => { expect(getPlaneSeat(mock2)).toBe(567); });
test('mock 3', () => { expect(getPlaneSeat(mock3)).toBe(119); });
test('mock 4', () => { expect(getPlaneSeat(mock4)).toBe(820); });

test('give me results', () => {
  const tickets = data.map((string) => getPlaneSeat(string)).sort((a, b) => a - b);
  const highestTicket = tickets[tickets.length - 1];
  const missingTicket = tickets.find((v, i) => tickets[i + 1] !== v + 1) + 1;
  console.log({ highestTicket, missingTicket });
});

function getUpper(arr) {
  const middle = arr.length / 2;
  return arr.filter((v, i) => i >= middle);
}

function getLower(arr) {
  const middle = arr.length / 2;
  return arr.filter((v, i) => i < middle);
}

function getPlaneSeat(str) {
  const rows = 128;
  const cols = 8;
  let avaliableRows = Array.from(Array(rows).keys());
  let avaliableCols = Array.from(Array(cols).keys());

  for (let i = 0; i <= str.length - 1; i += 1) {
    if (str[i] === 'F') {
      avaliableRows = getLower(avaliableRows);
    } else if (str[i] === 'B') {
      avaliableRows = getUpper(avaliableRows);
    } else if (str[i] === 'L') {
      avaliableCols = getLower(avaliableCols);
    } else if (str[i] === 'R') {
      avaliableCols = getUpper(avaliableCols);
    }
  }

  const finalRow = Number(avaliableRows.join());
  const finalCol = Number(avaliableCols.join());

  return finalRow * 8 + finalCol;
}

module.exports = {
  getPlaneSeat,
};

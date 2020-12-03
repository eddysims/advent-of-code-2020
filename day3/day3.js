function countTrees(arr, right = 3, down = 1) {
  const hill = arr;
  const totalRows = arr.length;
  let trees = 0;
  let x = 0;

  for (let i = 0; i < totalRows; i += down) {
    if (x >= hill[i].length) {
      x -= hill[i].length;
    }

    if (hill[i][x] === '#') {
      trees += 1;
    }

    x += right;
  }

  return trees;
}

module.exports = { countTrees };

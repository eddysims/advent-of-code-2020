function customsForms(str) {
  const arr = str.split("\n\n").map((v) => v.replace(/\n/g, ""));
  const uniques = arr.map((item) =>
    item
      .split("")
      .filter((a, b) => item.indexOf(a) === b)
      .join("")
  );
  let total = 0;
  uniques.forEach((item) => {
    total += item.length;
  });
  return total;
}

function exactCustomsForms(str) {
  const arr = str.split("\n\n");

  const matches = arr.map((item, index) => {
    const strings = item.split("\n").filter((v) => v !== "");
    return checkMatches(strings);
  });

  let total = 0;
  matches.forEach((item) => {
    total += item.length;
  });
  return total;
}

function checkMatches(arr) {
  const first = arr[0];
  const results = [];

  for (let i = 0; i < first.length; i++) {
    const checker = arr.every((v) => v.includes(first[i]));
    if (checker) {
      results.push(first[i]);
    }
  }
  return results;
}

module.exports = { customsForms, exactCustomsForms };

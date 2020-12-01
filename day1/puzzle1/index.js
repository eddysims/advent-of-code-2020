const data = require("./data");

function twoSum(arr, target) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(arr[i]);
        result.push(arr[j]);
      }
    }
  }

  return result;
}

const entries = twoSum(data, 2020);
const answer = entries[0] * entries[1];

console.log(answer);

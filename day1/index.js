const data = require("./data");

function twoSum(arr, target) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(arr[i]);
        result.push(arr[j]);

        return result.reduce((a, b) => a * b);
      }
    }
  }

  return result.reduce((a, b) => a * b);
}

function threeSum(arr, target) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      for (var k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          result.push(arr[i]);
          result.push(arr[j]);
          result.push(arr[k]);

          return result.reduce((a, b) => a * b);
        }
      }
    }
  }

  return result.reduce((a, b) => a * b);
}

// let answer = twoSum(data, 2020);
// console.log("2 numbers", answer);
// answer = threeSum(data, 2020);
// console.log("3 numbers", answer);

module.exports = { twoSum, threeSum };


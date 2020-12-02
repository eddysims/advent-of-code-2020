const { forEach } = require("./data");
const data = require("./data");

function debugPasswords(data) {
  const result = {
    correct: 0,
    incorrect: 0,
  };
  /**
   * Convert a single string into an array
   */
  const isDataAnArray = Array.isArray(data);
  if (!isDataAnArray) data = Array.of(data);

  data.forEach((item) => {
    /**
     * Split the string into things we care about
     */
    const [min, max, matcher, password] = item.split(/(?:-| |:)+/);

    const count = password.split("").filter((letter) => letter === matcher)
      .length;

    if (count >= min && count <= max) {
      result.correct++;
    } else {
      result.incorrect++;
    }
  });

  return result;
}

function charAtPos(data) {
  const result = {
    correct: 0,
    incorrect: 0,
  };
  /**
   * Convert a single string into an array
   */
  const isDataAnArray = Array.isArray(data);
  if (!isDataAnArray) data = Array.of(data);

  data.forEach((item) => {
    /**
     * Split the string into things we care about
     */
    const [pos1, pos2, matcher, password] = item.split(/(?:-| |:)+/);

    if (password[pos1 - 1] === matcher && password[pos2 - 1] === matcher) {
      result.incorrect++;
    } else if (
      password[pos1 - 1] === matcher ||
      password[pos2 - 1] === matcher
    ) {
      result.correct++;
    } else {
      result.incorrect++;
    }
  });

  return result;
}

// Part 1 answer
// console.log(debugPasswords(data));
// Part 2 answer
// console.log(charAtPos(data));

module.exports = {
  debugPasswords,
  charAtPos,
};

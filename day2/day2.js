// const data = require('./data');

function debugPasswords(data) {
  const result = {
    correct: 0,
    incorrect: 0,
  };
  let newData = data;
  /**
   * Convert a single string into an array
   */
  const isDataAnArray = Array.isArray(data);
  if (!isDataAnArray) newData = Array.of(data);

  newData.forEach((item) => {
    /**
     * Split the string into things we care about
     */
    const [min, max, matcher, password] = item.split(/(?:-| |:)+/);

    const count = password.split('').filter((letter) => letter === matcher)
      .length;

    if (count >= min && count <= max) {
      result.correct += 1;
    } else {
      result.incorrect -= 1;
    }
  });

  return result;
}

function charAtPos(data) {
  const result = {
    correct: 0,
    incorrect: 0,
  };
  let newData = data;
  /**
   * Convert a single string into an array
   */
  const isDataAnArray = Array.isArray(data);
  if (!isDataAnArray) newData = Array.of(data);

  newData.forEach((item) => {
    /**
     * Split the string into things we care about
     */
    const [pos1, pos2, matcher, password] = item.split(/(?:-| |:)+/);

    if (password[pos1 - 1] === matcher && password[pos2 - 1] === matcher) {
      result.incorrect += 1;
    } else if (
      password[pos1 - 1] === matcher
      || password[pos2 - 1] === matcher
    ) {
      result.correct += 1;
    } else {
      result.incorrect += 1;
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

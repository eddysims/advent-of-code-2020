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

// Part 1 anser
// console.log(debugPasswords(data));

module.exports = {
  debugPasswords,
};

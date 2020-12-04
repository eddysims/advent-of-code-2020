const validations = require('./validations');

function simpleArrayCompare(arr1, arr2) {
  return arr1.sort().join() === arr2.sort().join();
}

/**
 * Validates
 * @param {array} item Item to validate as key:value pair
 */
function validation(item) {
  const [key, value] = item;
  switch (key) {
    case 'byr':
      return validations.validateBirthYear(value);
    case 'iyr':
      return validations.validateIssueYear(value);
    case 'eyr':
      return validations.validateExpiryYear(value);
    case 'hgt':
      return validations.validateHeight(value);
    case 'hcl':
      return validations.validateHairColor(value);
    case 'ecl':
      return validations.validateEyeColor(value);
    case 'pid':
      return validations.validatePassportId(value);
    default:
      return false;
  }
}

/**
 * Checks if the passport is valid
 * @param {string} passport the passport to check
 * @param {array} required the array of required fields to check agains
 */
function isValid(passport, required) {
  const keys = passport.split(' ').map((item) => {
    const itemArr = item.split(':');
    // if (required.includes(itemArr[0])) {
    return validation(itemArr) ? itemArr[0] : false;
    // }
    // return false;
  }).filter((item) => item);
  return simpleArrayCompare(keys, required);
}

/**
 * counts the valid passports
 * @param {string} str the batch of passports to validate
 */
function countValidPassports(str) {
  const passports = str.split('\n\n');
  const required = [
    'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid',
  ];

  const result = {
    valid: 0,
    invalid: 0,
  };

  passports.forEach((passport) => {
    const valid = isValid(passport.replace(/\n/g, ' '), required);
    if (valid) {
      result.valid += 1;
    } else {
      result.invalid += 1;
    }
  });

  return result;
}

module.exports = { countValidPassports };

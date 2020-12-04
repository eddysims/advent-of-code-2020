module.exports = {
  validateBirthYear: (value) => (Number(value) >= 1920 && Number(value) <= 2002),
  validateIssueYear: (value) => (Number(value) >= 2010 && Number(value) <= 2020),
  validateExpiryYear: (value) => (Number(value) >= 2020 && Number(value) <= 2030),
  validateHeight: (value) => {
    const isCms = value.includes('cm');
    const isIns = value.includes('in');
    const height = Number(value.replace(/\D/g, ''));

    if (isCms) {
      return height >= 150 && height <= 193;
    }

    if (isIns) {
      return height >= 59 && height <= 76;
    }

    return false;
  },
  validateHairColor: (value) => value.toLowerCase().match(/^#[0-9a-f]{6}/i),
  validateEyeColor: (value) => {
    const colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    return colors.includes(value);
  },
  validatePassportId: (value) => {
    // if (value[0] !== '0') return false;
    if (isNaN(Number(value))) return false;
    if (value.length !== 9) return false;

    return true;
  },
};

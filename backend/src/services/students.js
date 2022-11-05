const validations = require('./validations');

const validateCreation = async (student) => {
  const isValid = validations.validateEntries(student);
  if (isValid) return isValid;

  const normalizedStudent = validations.normalize(student);
  return normalizedStudent;
}

module.exports = {
  validateCreation,
};

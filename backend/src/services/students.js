const validations = require('./validations');

const validateCreation = async (student) => {
  const isValid = validations.validateEntries(student);
  if (isValid) return isValid;

  const normalizedStudent = validations.normalize(student);
  return normalizedStudent;
}

const validateRemove = async (id) => {
  const isValid = await validations.validateId(id);
  return isValid;
}

module.exports = {
  validateCreation,
  validateRemove,
};

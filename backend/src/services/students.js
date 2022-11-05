const validations = require('./validations');

const validateCreation = async (student) => {
  const isValid = validations.validateEntries(student);
  if (isValid) return isValid;

  const normalizedStudent = validations.normalize(student);
  return normalizedStudent;
};

const validateRemove = async (id) => {
  const isValid = await validations.validateId(id);
  return isValid;
};

const validateUpdate = async (id, student) => {
  const isValid = await validations.validateId(id);
  if (isValid.message) return isValid;

  const normalized = validations.normalize(student);
  return normalized;
};

module.exports = {
  validateCreation,
  validateRemove,
  validateUpdate,
};

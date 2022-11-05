const validateEntries = (student) => {
  const { name, phone, address } = student;

  if (!name) return { code: 404, message: 'Name not found.' };
  if (!phone) return { code: 404, message: 'Phone not found.' };
  if (!address) return { code: 404, message: 'Address not found.'};

  return false;
}

const normalize = (student) => {
  const { name, phone, address, image } = student;

  const normalizedStudent = {
    name: name.toUpperCase(),
    phone: Number(phone.replace(/\D+/g, '')),
    address: address.toUpperCase(),
    image: image ? image : '',
  }

  return normalizedStudent;
}

module.exports = {
  validateEntries,
  normalize
};

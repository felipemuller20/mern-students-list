const { ObjectId } = require('mongodb');
const Student = require('../models/Student');

const validateEntries = (student) => {
  const { name, phone, address } = student;

  if (!name && !phone) return { code: 400, message: 'Personal data is empty'};

  if (!name) return { code: 400, message: 'Field name is empty.' };
  if (!phone) return { code: 400, message: 'Field phone is empty.' };

  const { city, uf, region, street } = address;

  if (!city && !uf && !region && !street) return { code: 400, message: 'Address is empty'};

  if (!city) return { code: 400, message: 'Field city is empty.' };
  if (!uf) return { code: 400, message: 'Field UF is empty.' };
  if (!region) return { code: 400, message: 'Field region is empty.'};
  if (!street) return { code: 400, message: 'Field street is empty.'};

  if (uf.length !== 2) return { code: 400, message: 'UF must have exactly 2 characters' }

  return false;
}

const normalize = (student) => {
  const { name, phone, address, image } = student;
  const { city, uf, region, street } = address;

  const normalizedStudent = {
    name: name.toUpperCase(),
    phone: Number(phone.replace(/\D+/g, '')),
    address: {
      city: city.toUpperCase(),
      uf: uf.toUpperCase(),
      region: region.toUpperCase(),
      street: street.toUpperCase(),
    },
    image: image ? image : '',
  }

  return normalizedStudent;
}

const validateId = async (id) => {
  if (!ObjectId.isValid(id)) return { code: 400, message: 'Inserted ID is invalid' };

  const student = await Student.findById(id);
  if (!student) return { code: 404, message: 'There is no match with this ID' };

  return student;
};

module.exports = {
  validateEntries,
  normalize,
  validateId,
};

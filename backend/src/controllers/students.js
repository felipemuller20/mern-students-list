const rescue = require('express-rescue');
const Student = require('../models/Student');
const fs = require('fs');

const StudentsServices = require('../services/students');

const getAll = rescue(async (_req, res) => {
  const students = await Student.find({});
  res.status(200).json(students);
})

const getAllAlphabetic = rescue(async (_req, res) => {
  const students = await Student.find({}).sort({ name: 1 });
  res.status(200).json(students);
})

const create = rescue(async (req, res) => {
  const { name, address, phone, image } = req.body;
  const newStudent = {
    name, address, phone, image,
  };

  const student = await StudentsServices.validateCreation(newStudent);
  if (student.message) return res.status(student.code).json(student.message);

  const createdStudent = await Student.create(student);
  return res.status(200).json(createdStudent);
});

const remove = rescue(async (req, res) => {
  const { id } = req.params;

  const student = await StudentsServices.validateRemove(id);
  if (student.message) return res.status(student.code).json(student.message);

  const removedStudent = await Student.findById(id);

  if (removedStudent.image) {
    await fs.unlink(`./uploads/${removedStudent.image}`, (error) => {
      if (error) throw error;
    })
  }

  await Student.deleteOne({ _id: id });
  return res.status(200).json(student);
});

const update = rescue(async (req, res) => {
  const { id } = req.params;
  const { name, address, phone, image } = req.body;

  const newStudent = {
    name,
    address,
    phone,
    image,
  };

  const validatedStudent = await StudentsServices.validateUpdate(id, newStudent);
  if (validatedStudent.message) {
    return res.status(validatedStudent.code).json(validatedStudent.message);
  }

  if (image) {
    const result = await Student.findById(id);
    const oldImage = result.image;
    await Student.updateOne({ _id: id }, { name, address, phone, image });
    if (oldImage) {
      await fs.unlink(`./uploads/${oldImage}`, (error) => {
        if (error) console.error(error);
      });
    }
  } else {
    await Student.updateOne({ _id: id }, { name, address, phone })
  }

  const getStudent = await Student.findById(id);
  return res.status(200).json(getStudent);
})

const uploadImage = rescue(async (req, res) => {
  if (req.file) return res.status(200).json(req.file);
  return res.status(400).json('Upload error');
})

const getById = rescue(async (req, res) => {
  const { id } = req.params;

  const student = await Student.findById(id);
  res.status(200).json(student);
})

module.exports = {
  create,
  getAll,
  getAllAlphabetic,
  remove,
  update,
  uploadImage,
  getById,
};

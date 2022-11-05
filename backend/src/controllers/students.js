const rescue = require('express-rescue');
const Student = require('../models/Student');

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

module.exports = {
  create,
  getAll,
  getAllAlphabetic,
};

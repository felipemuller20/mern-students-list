const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const studentsRouter = require('./routers/student.router');
const StudentControllers = require('./controllers/students');
const multerConfig = require('./multerConfig');

const app = express();
app.use(express.json());
app.use(cors());

app.use(studentsRouter);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.post('/image', multer(multerConfig).single('image'), StudentControllers.uploadImage);

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const StudentControllers = require('./controllers/students');
const multerConfig = require('./multerConfig');

const app = express();
const PORT = 3001;

mongoose.connect(process.env.MONGO_DB_URL || 'mongodb://localhost:27017/StudentsList', {
  useNewUrlParser: true,
})

app.use(bodyParser.json());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
  app.use(cors());
  next();
})

app.get('/students', StudentControllers.getAll);
app.get('/students/alphabetic-order', StudentControllers.getAllAlphabetic);
app.get('/student/:id', StudentControllers.getById)

app.post('/student', StudentControllers.create);
app.post('/image', multer(multerConfig).single('image'), StudentControllers.uploadImage)

app.delete('/student/:id', StudentControllers.remove);

app.put('/student/:id', StudentControllers.update);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

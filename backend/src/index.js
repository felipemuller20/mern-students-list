const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const StudentControllers = require('./controllers/students');
const multerConfig = require('./multerConfig');

const app = express();
const PORT = 3001;

mongoose.connect(process.env.MONGO_DB_URL || 'mongodb://localhost:27017/StudentsList', {
  useNewUrlParser: true,
})


app.use(cors());
app.use(bodyParser.json());

app.get('/students', StudentControllers.getAll);
app.get('/students/alphabetic-order', StudentControllers.getAllAlphabetic);
app.get('/student/:id', StudentControllers.getById)

app.post('/student', StudentControllers.create);
app.post('/image', multer(multerConfig).single('file'), StudentControllers.uploadImage)

app.delete('/student/:id', StudentControllers.remove);

app.put('/student/:id', StudentControllers.update);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

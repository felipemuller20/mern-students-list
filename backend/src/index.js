const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

mongoose.connect(process.env.MONGO_DB_URL || 'mongodb://localhost:27017/StudentsList', {
  useNewUrlParser: true,
})

const StudentControllers = require('./controllers/students');

app.use(cors());
app.use(bodyParser.json());

app.get('/students', StudentControllers.getAll);
app.get('/student/alphabetic-order', StudentControllers.getAllAlphabetic);

app.post('/student', StudentControllers.create);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

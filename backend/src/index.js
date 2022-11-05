const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

mongoose.connect(process.env.MONGO_DB_URL || 'mongodb://localhost:27017/StudentsList', {
  useNewUrlParser: true,
})

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

require('dotenv').config();
const mongoose = require('mongoose');

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URL
    || 'mongodb://localhost:27017/StudentsList',
) => mongoose.connect(mongoDatabaseURI);

module.exports = {
  connectToDatabase,
};

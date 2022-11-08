const mongoose = require('mongoose');

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://localhost:27017/StudentsList',
) => mongoose.connect(mongoDatabaseURI);

module.exports = {
  connectToDatabase,
};

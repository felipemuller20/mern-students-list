require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_DSN = process.env.MONGO_URI || 'mongodb://localhost:27017/StudentsList'

test('Connect', async () => {
  const promise = mongoose.connect(MONGODB_DSN);

  await expect(promise).resolves.toBeInstanceOf(mongoose.Mongoose);
  await mongoose.connection.close();
});

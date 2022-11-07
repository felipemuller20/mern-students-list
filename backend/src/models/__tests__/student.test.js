const mongoose = require('mongoose');

const MONGODB_DSN = 'mongodb://localhost:27017/StudentsList'

test('Connect', async () => {
  const promise = mongoose.connect(MONGODB_DSN);

  await expect(promise).resolves.toBeInstanceOf(mongoose.Mongoose);
  await mongoose.connection.close();
});

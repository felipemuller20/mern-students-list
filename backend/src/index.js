const connection = require('./connection/connect');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

connection.connectToDatabase();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

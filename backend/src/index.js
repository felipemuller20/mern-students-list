const connection = require('./connection/connect');
const app = require('./app');

const PORT = 3001;

connection.connectToDatabase();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

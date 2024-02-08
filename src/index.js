require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

var conString = 'postgres://username:password@localhost/database';
var conString =
  'postgres://sammarv:Bf3eTNlzLMPCBvov2e7ejZuwCR4pJUbb@127.0.0.1:5432/leetnotesdb';

// let's go!
require('dotenv').config({ path: 'variables.env' }); // make env variables available throughout app.
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO Use express middlware to handle cookies (JWT)
// TODO Use express middlware to populate current user

server.start(
  {
    // Only want endpoint to be visited from approved URLs.
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL, // Only frontend can access backend
    },
  },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);

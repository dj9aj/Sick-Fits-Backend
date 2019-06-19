const cookieParser = require('cookie-parser');

require('dotenv').config({ path: 'variables.env' }); // make env variables available throughout app.
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();
// Use express middleware to handle cookies (JWT). Parse any cookies that come along with the request.
// Cookies will be presented in an object rather than string.
server.express.use(cookieParser());
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
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);

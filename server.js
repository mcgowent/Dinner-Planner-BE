const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session);

const UsersRouter = require('./users/usersRouter.js');  //This should route to whatever Route you are setting
const AuthRouter = require('./auth/authRouter.js');
const knexConnection = require('./data/db-config')

const server = express();



server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/auth', AuthRouter);
server.use('/api/users', UsersRouter);


module.exports = server;
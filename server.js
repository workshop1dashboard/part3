const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3001;

const server = express();
server.use('/user', jsonServer.router('db.json'));

server.listen(port);

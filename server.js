const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(router)
const port = process.env.PORT || 3000
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.listen(port);

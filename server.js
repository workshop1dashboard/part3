const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3001;
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');

app.use(middlewares, router);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = express();
server.use('/user', app);

server.listen(port);

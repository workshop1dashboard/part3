const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path');
const express = require('express');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 3001;

app.use('/user', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port);

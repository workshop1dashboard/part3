const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path');
const express = require('express');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 3000;

app.use('/', middlewares, router);
app.use(express.static("public/"));

app.get('/', function (req, res) {
    res.sendFile('public/index.html');
});

app.listen(port);

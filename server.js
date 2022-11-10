const jsonServer = require('json-server');
// const app = jsonServer.create();
const path = require('path');
const express = require('express');
const app = express();
app.set('port', (process.env.PORT || 3001));
app.use(jsonServer.defaults());
app.use('/user', jsonServer.router('db.json'))
// const middlewares = jsonServer.defaults();
// const router = jsonServer.router('db.json');
// const port = process.env.PORT || 3001;
//
// app.use('/user', middlewares, router);
// app.use(express.static(path.join(__dirname, 'dist')));
//
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
//
// app.listen(port);
app.listen(app.get('port'), () => {
    console.log(app.get('port'));
    if (process.send)
        process.send('online')
})

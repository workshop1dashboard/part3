const jsonServer = require('json-server');
const app = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 3000;

app.use(middlewares)
app.use(router);

app.listen(port);

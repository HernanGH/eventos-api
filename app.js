var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
const getUser = require('./utils/getUser');
const globalParaObtenerUser = require('./middlewares/globalParaObtenerUser');
const globalParaMostrarParametros = require('./middlewares/globalParaMostrarParametros');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(globalParaMostrarParametros); // MIDDLEWARE AGARRA TODOS LOS ENDPOINT DE ABAJO

app.use('/login', loginRouter);

app.use(globalParaObtenerUser); // MIDDLEWARE AGARRA TODOS LOS ENDPOINT DE ABAJO MENOS /LOGIN

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

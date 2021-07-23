const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

// ROUTERS
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

// MIDDLEWARES
const globalParaObtenerUser = require('./middlewares/globalParaObtenerUser');
const globalParaMostrarParametros = require('./middlewares/globalParaMostrarParametros');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(globalParaMostrarParametros); // MIDDLEWARE AGARRA TODOS LOS ENDPOINT DE ABAJO

app.use('/login', loginRouter); // ROUTER PUBLICO SIN VERIFICACION DE TOKEN

app.use(globalParaObtenerUser); // MIDDLEWARE AGARRA TODOS LOS ENDPOINT DE ABAJO MENOS /LOGIN

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

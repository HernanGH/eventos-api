const globalParaMostrarParametros = (request, response, next) => {
  console.log('parametros: ', request.params);
  console.log('body: ', request.body);
  next();
}

module.exports = globalParaMostrarParametros;
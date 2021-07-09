const getUser = require("../utils/getUser");

const globalParaObtenerUser = (request, response, next) => {
  // OBTENGO EL TOKEN
  const bearerToken = request.headers.authorization;
  
  if (!bearerToken) {
    response.send({error: 'no tiene permisos'});
  } else {
    const token = bearerToken.split(' ')[1];
    // TENGO TOKEN Y OBTENGO EL USER
    const user = getUser(token);
    if (!user) {
      response.send({error: 'token invalido'});
    } else {
      request.user = user;
      next(); // usersRouter, loginRouter, indexRouter disponibles
    }
  }
}

module.exports = globalParaObtenerUser;

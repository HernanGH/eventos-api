var jwt = require('jsonwebtoken');

function getUser(token) {
  try {
    var user = jwt.verify(token, 'shhhhh');
    // var { email } = jwt.verify(token, 'shhhhh');
    // user.email
    return user;
  } catch(err) {
    console.error(err);
    return false;   // error
  }
}

module.exports = getUser;

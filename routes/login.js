var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const users = [
  {
    "email": "asd@mail.com",
    "password": "1234"
  },
  {
    "email": "qwerty@mail.com",
    "password": "9876"
  }
]

/* GET home page. */
router.post('/', (req, res)  => {
  // BUSCAR USUARIO CON EMAIL Y PASS
  const user = users
    .find((userItem) => userItem.email === req.body.email && userItem.password === req.body.password)
    
    if (user) {
    // OCULTO LA PASS
    delete user.password;

    var token = jwt.sign(user, 'shhhhh');
    
    console.log(token);
    res.send({ token: token, user: user });
    
  } else { // IMPORTANTE SINO SE EJECUTAN LOS @ SEND
    res.status(400).send({ error: 'usuario no encontrado' });
  }
});

module.exports = router;
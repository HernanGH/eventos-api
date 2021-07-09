var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const UserModel = require('../models/users');

/* GET home page. */
router.post('/', async (req, res)  => {
  // BUSCAR USUARIO CON EMAIL Y PASS
  const user = await UserModel.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (user) {
    const {
      _id,
      email,
      firstName,
      lastName,
    } = user;
    // ES IGUAL A 
    // const _id = user._id;
    // const email = user.email;
    // const firstName = user.firstName;
    // const lastName = user.lastName;

    const usePayload = {
      _id,
      email,
      firstName,
      lastName,
    }

    var token = jwt.sign(usePayload, 'shhhhh');
    
    console.log(token);
    res.send({ token: token, user: usePayload });
    
  } else { // IMPORTANTE SINO SE EJECUTAN LOS @ SEND
    res.status(400).send({ error: 'usuario no encontrado' });
  }
});

module.exports = router;
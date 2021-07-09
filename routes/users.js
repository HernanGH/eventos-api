var express = require('express');
var router = express.Router();

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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;

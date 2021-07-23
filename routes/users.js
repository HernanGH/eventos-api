var express = require('express');
const UserModel = require('../models/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { email } = req.query;
  let query = {}
  if (email) {
    query = {
      email
    };
  }
  UserModel.find(query).then((users) => {
    console.log('then users: ', users);
    res.status(200).json(users);
  });
});

module.exports = router;

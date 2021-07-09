var express = require('express');
const UserModel = require('../models/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModel.find({}).then((users) => {
    console.log('then users: ', users);
    res.send(users);
  });
});

module.exports = router;

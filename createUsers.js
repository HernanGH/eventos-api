const UserModel = require("./models/users");

new UserModel({
  "email": "asd@mail.com",
  "password": "1234",
  "firstName": "acamica",
  "lastName": "acamica"
}).save();

new UserModel({
  "email": "qwerty@mail.com",
  "password": "9876",
  "firstName": "acamica",
  "lastName": "acamica"
}).save();

const mongoose = require('./connection');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Users
const Users = new Schema({
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

const UserModel = mongoose.model('users', Users);

module.exports = UserModel;
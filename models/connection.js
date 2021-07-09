const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eventos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

module.exports = mongoose;
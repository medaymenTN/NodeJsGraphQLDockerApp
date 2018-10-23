var addbook = require('./addBook').add;
var updatebook = require('./updateBook').update
var deletebook = require('./deleteBook').remove
module.exports = {
  addbook,
  updatebook,
  deletebook
}
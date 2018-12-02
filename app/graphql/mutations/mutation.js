var addbook = require('./addBook').add;
var updatebook = require('./updateBook').update;
var deletebook = require('./deleteBook').remove;
var addauto = require('./addAuto').add;
module.exports = {
    addbook,
    updatebook,
    deletebook,
    addauto
};
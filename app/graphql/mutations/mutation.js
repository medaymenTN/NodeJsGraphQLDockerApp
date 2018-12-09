var addbook = require('./addBook').add;
var updatebook = require('./updateBook').update;
var deletebook = require('./deleteBook').remove;
var addauto = require('./addAuto').add;
var addcliente = require('./addCliente').add;
var addmarca = require('./addMarca').add;

module.exports = {
    addbook,
    updatebook,
    deletebook,
    addauto,
    addcliente,
    addmarca
};
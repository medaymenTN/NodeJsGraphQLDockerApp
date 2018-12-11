var addbook = require('./addBook').add;
var updatebook = require('./updateBook').update;
var deletebook = require('./deleteBook').remove;
var addauto = require('./addAuto').add;
var addcliente = require('./addCliente').add;
var addmarca = require('./addMarca').add;
var addtarea = require('./addTarea').add;
var addTrabajo = require('./addTrabajo').add;

module.exports = {
    addbook,
    updatebook,
    deletebook,
    addauto,
    addcliente,
    addmarca,
    addtarea,
    addTrabajo
};
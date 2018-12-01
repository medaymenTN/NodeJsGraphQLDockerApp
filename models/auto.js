var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutoSchema = new Schema({
    modelo: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    patente: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false
    },
    fechaAlta: {
        type: Date,
        required: true
    }

});
var AutoModel = mongoose.model('auto', AutoSchema);
module.exports = AutoModel;
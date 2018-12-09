var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    idCliente: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    apellido: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    direccion2: {
        type: String,
        required: true
    },
    comentario : {
        type: String,
        required: true
    },
    codCiudad:{
        type: Number,
        required: false
    },
    codProvincia:{
        type: Number,
        required: false
    },
    fechaAlta: {
        type: Date,
        default: Date.now
    }

});
var ClienteModel = mongoose.model('cliente', ClienteSchema);
module.exports = ClienteModel;
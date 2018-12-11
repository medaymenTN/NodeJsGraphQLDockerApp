var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-easy-auto-increment');

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
        type: String
    },
    celular: {
        type: String
    },
    direccion: {
        type: String,
        required: true
    },
    direccion2: {
        type: String
    },
    comentario : {
        type: String
    },
    idCiudad:{
        type: Number,
        required: false
    },
    idProvincia:{
        type: Number,
        required: false
    },
    fechaAlta: {
        type: Date,
        default: Date.now
    }

});

ClienteSchema.plugin(autoIncrement, { field: 'idCliente', collection: 'counters' });
var ClienteModel = mongoose.model('cliente', ClienteSchema);
module.exports = ClienteModel;
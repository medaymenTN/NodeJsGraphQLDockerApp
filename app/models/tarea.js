var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TareaSchema = new Schema({
    idTrabajo: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    idPersonal:{
        type: Number,
            required: false
    },
    idLocalizacion:{
        type: Number,
            required: false
    },
    estadoReparacion: {
        type: String,
        required: true
    },
    fechaModificacion: {
        type: Date
    },
    color: {
        type: String
    },
    comentario: {
        type: String
    },
    reemplazar: {
        type: Boolean
    },
    reparar: {
        type: Boolean
    },
    cromar: {
        type: Boolean
    },
    pintar: {
        type: Boolean
    },
    ubicacion: {
        type: String
    }
});

var TareaModel = mongoose.model('tarea', TareaSchema);
module.exports = TareaModel;
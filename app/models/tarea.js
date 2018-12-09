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
    EstadoRep: {
        type: String,
        required: true
    },
    FechaModificacion: {
        type: Date
    },
    Color: {
        type: String
    },
    Comentario: {
        type: String
    },
    Reemplazar: {
        type: Boolean
    },
    Reparar: {
        type: Boolean
    },
    Cromar: {
        type: Boolean
    },
    Pintar: {
        type: Boolean
    },
    Ubicacion: {
        type: String
    }
});

var TareaModel = mongoose.model('tarea', TareaSchema);
module.exports = TareaModel;
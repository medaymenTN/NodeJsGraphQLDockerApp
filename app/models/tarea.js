var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TareaSchema = new Schema({
    idTrabajo: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    idPersonal: {
        type: Number,
        required: false
        ,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    idLocalizacion: {
        type: Number,
        required: false,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }

    },
    estadoReparacion: {
        type: String
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
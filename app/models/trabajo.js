var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrabajoSchema = new Schema({
    idTrabajo: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    FechaPresup: {
        type: Date
    },
    IDCliente:{
        type: Number,
        required: false
    },
    IDAuto:{
        type: Number,
        required: false
    },
    Presup: {
        type: String,
        required: true
    },
    ManoObra: {
        type: String,
        required: true
    },
    Repuestos: {
        type: String,
        required: true
    },
    Comentario: {
        type: String,
        required: true
    },
    Estado: {
        type: String,
        required: true
    },
    FechaDesp: {
        type: Date
    },
    FechaTurno: {
        type: Date
    },
    HoraTurno: {
        type: Date
    },
    FechaCierra: {
        type: Date
    },
    Seguro: {
        type: String,
        required: true
    },
    Compañia: {
        type: String,
        required: true
    },
    ComenRep: {
        type: String,
        required: true
    }
});

var TrabajoModel = mongoose.model('trabajo', TrabajoSchema);
module.exports = TrabajoModel;
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
    fechaPresup: {
        type: Date
    },
    idCliente:{
        type: Number,
        required: false
    },
    idAuto:{
        type: Number,
        required: false
    },
    presupuesto: {
        type: String,
        required: true
    },
    manoObra: {
        type: String,
        required: true
    },
    repuestos: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    fechaDesp: {
        type: Date
    },
    fechaTurno: {
        type: Date
    },
    horaTurno: {
        type: Date
    },
    fechaCierra: {
        type: Date
    },
    seguro: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    comenRep: {
        type: String,
        required: true
    }
});

var TrabajoModel = mongoose.model('trabajo', TrabajoSchema);
module.exports = TrabajoModel;
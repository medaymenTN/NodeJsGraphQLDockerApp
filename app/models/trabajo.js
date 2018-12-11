var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-easy-auto-increment');

var TrabajoSchema = new Schema({
    idTrabajo: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    fechaPresupuesto: {
        type: Date
    },
    idCliente: {
        type: Number,
        required: false,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    idAuto: {
        type: Number,
        required: false,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    presupuesto: {
        type: String
    },
    manoObra: {
        type: String
    },
    repuestos: {
        type: String
    },
    comentario: {
        type: String
    },
    estado: {
        // Estado del trabajo
        // D = despachado
        // P = pendiente
        // C = Cancelado
        // T = Terminado
        // E = Entregado

        type: String,
        required: true
    },
    fechaDespacho: {
        type: Date
    },
    fechaTurno: {
        type: Date
    },
    horaTurno: {
        type: Date
    },
    fechaCierre: {
        type: Date
    },
    seguro: {
        type: String
    },
    company: {
        type: String
    },
    comenRep: {
        type: String
    }
});

TrabajoSchema.plugin(autoIncrement, {field: 'idTrabajo', collection: 'counters'});
var TrabajoModel = mongoose.model('trabajo', TrabajoSchema);
module.exports = TrabajoModel;
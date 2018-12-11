var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-easy-auto-increment');

var AutoSchema = new Schema({
    idAuto: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    modelo: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    idMarca: {
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
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
        default: Date.now
    }

});
AutoSchema.plugin(autoIncrement, { field: 'idAuto', collection: 'counters' });
var AutoModel = mongoose.model('auto', AutoSchema);
module.exports = AutoModel;
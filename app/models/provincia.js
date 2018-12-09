var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProvinciaSchema = new Schema({
    idProvincia: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    provincia: {
        type: String,
        required: true
    },
    codProvincia: {
        type: String
    },
    idPais: {
        type: String,
        required: true
    }

});

var ProvinciaModel = mongoose.model('provincia', ProvinciaSchema);
module.exports = ProvinciaModel;
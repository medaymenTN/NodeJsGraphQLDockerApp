var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CiudadSchema = new Schema({
    idCiudad: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    idProvincia: {
        type: Number,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    ciudadCorta: {
        type: String,
        required: false
    }

});

var CiudadModel = mongoose.model('ciudad', CiudadSchema);
module.exports = CiudadModel;
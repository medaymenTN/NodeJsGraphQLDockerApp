var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocalizacionSchema = new Schema({
    idLocalizacion: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    localizacion: {
        type: String,
        required: true
    }
});

var LocalizacionModel = mongoose.model('localizacion', LocalizacionSchema);
module.exports = LocalizacionModel;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarcaSchema = new Schema({
    idMarca: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    marca: {
        type: String,
        required: true
    }

});

var MarcaModel = mongoose.model('marca', MarcaSchema);
module.exports = MarcaModel;
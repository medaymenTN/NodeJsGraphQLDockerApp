var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-easy-auto-increment');

var MarcaSchema = new Schema({
    idMarca: {
        type: Number,
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

MarcaSchema.plugin(autoIncrement, { field: 'idMarca', collection: 'counters' });

var MarcaModel = mongoose.model('marca', MarcaSchema);
module.exports = MarcaModel;
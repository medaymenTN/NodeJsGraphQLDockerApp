
var easyAutoIncrement = function (schema, options) {
    // default field name and default collection name
    var fieldName = 'sn';
    var collection = 'SerialNumberCounters';


    // if you pass options.field, will change your fieldName
    if (options && options.field) {
        fieldName = options.field;
    }

    // if you pass options.collection, will change your collection
    if (options && options.collection) {
        collection = options.collection;
    }

    // make new field for schema
    var newField = {};
    newField[fieldName] = {
        type: Number,
        index: true,
        unique: true
    };

    // schema add new field
    schema.add(newField);

    schema.pre('save', function (next) {
        var doc = this;

        if(!doc.db || !doc.isNew || doc[fieldName] !== undefined) {
            return next();
        }

        var db = doc.db.db;
        var collectionName = doc.collection.name;

        db.collection(collection).findOneAndUpdate(
            {
                _id: collectionName
            },
            {
                $inc: { seq: 1 }
            },
            {
                returnOriginal: false,
                upsert: true
            },
            function(err, result) {
                if(err) {
                    return next(err);
                }
                doc[fieldName] = result.value.seq;
                return next();
            }
        );
    });
};

module.exports = easyAutoIncrement;
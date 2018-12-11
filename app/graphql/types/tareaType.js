var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLBoolean = require('graphql').GraphQLBoolean;


//Localizaciones
var LocalizacionesModel = require('../../models/localizacion');
var localizacionType = require('../types/localizacionType').localizacionType;


// Auto Type
exports.tareaType = new GraphQLObjectType({
    name: 'tareas',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idTrabajo: {
                type: GraphQLInt
            },
            idPersonal:{
                type: GraphQLInt
            },
            idLocalizacion:{
                type: GraphQLInt
            },
            localizacion: {
                type: GraphQLString,
                resolve: async (tarea) => {
                    const queLocalizacion = await LocalizacionesModel.findOne({'idLocalizacion':tarea.idLocalizacion});
                    if (!queLocalizacion) {
                        throw new Error('error while fetching data localizacion related')
                    }
                    return queLocalizacion.localizacion;
                }
            },
            estadoReparacion: {
                type: GraphQLString
            },
            fechaModificacion: {
                type: GraphQLString,
                default: Date
            },
            color: {
                type: GraphQLString
            },
            comentario: {
                type: GraphQLString
            },
            reemplazar: {
                type: GraphQLBoolean,
                default: false
            },
            reparar: {
                type: GraphQLBoolean,
                default: false
            },
            cromar: {
                type: GraphQLBoolean,
                default: false
            },
            pintar: {
                type: GraphQLBoolean,
                default: false
            },
            ubicacion: {
                type: GraphQLString
            }
        }
    }
});



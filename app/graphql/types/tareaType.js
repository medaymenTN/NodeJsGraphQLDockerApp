var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLBoolean = require('graphql').GraphQLBoolean;


// Auto Type
exports.tareaType = new GraphQLObjectType({
    name: 'tareas',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idTarea: {
                type: GraphQLInt
            },
            idPersonal:{
                type: GraphQLInt
            },
            idLocalizacion:{
                type: GraphQLInt
            },
            EstadoRep: {
                type: GraphQLString
            },
            FechaModificacion: {
                type: GraphQLString
            },
            Color: {
                type: GraphQLString
            },
            Comentario: {
                type: GraphQLString
            },
            Reemplazar: {
                type: GraphQLBoolean
            },
            Reparar: {
                type: GraphQLBoolean
            },
            Cromar: {
                type: GraphQLBoolean
            },
            Pintar: {
                type: GraphQLBoolean
            },
            Ubicacion: {
                type: GraphQLString
            }
        }
    }
});



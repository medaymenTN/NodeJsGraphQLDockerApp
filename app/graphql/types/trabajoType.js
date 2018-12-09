var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;


// Auto Type
exports.trabajoType = new GraphQLObjectType({
    name: 'trabajos',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idTrabajo: {
                type: GraphQLInt
            },
            FechaPresup: {
                type: GraphQLString
            },
            IDCliente:{
                type: GraphQLInt
            },
            IDAuto:{
                type: GraphQLInt
            },
            Presup: {
                type: GraphQLString
            },
            ManoObra: {
                type: GraphQLString
            },
            Repuestos: {
                type: GraphQLString
            },
            Comentario: {
                type: GraphQLString
            },
            Estado: {
                type: GraphQLString
            },
            FechaDesp: {
                type: GraphQLString
            },
            FechaTurno: {
                type: GraphQLString
            },
            HoraTurno: {
                type: GraphQLString
            },
            FechaCierra: {
                type: GraphQLString
            },
            Seguro: {
                type: GraphQLString
            },
            Compañia: {
                type: GraphQLString
            },
            ComenRep: {
                type: GraphQLString
            }
        }
    }
});



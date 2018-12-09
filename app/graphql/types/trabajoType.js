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
            fechaPresup: {
                type: GraphQLString
            },
            idCliente:{
                type: GraphQLInt
            },
            idAuto:{
                type: GraphQLInt
            },
            presupuesto: {
                type: GraphQLString
            },
            manoObra: {
                type: GraphQLString
            },
            repuestos: {
                type: GraphQLString
            },
            comentario: {
                type: GraphQLString
            },
            estado: {
                type: GraphQLString
            },
            fechaDesp: {
                type: GraphQLString
            },
            fechaTurno: {
                type: GraphQLString
            },
            horaTurno: {
                type: GraphQLString
            },
            fechaCierra: {
                type: GraphQLString
            },
            seguro: {
                type: GraphQLString
            },
            company: {
                type: GraphQLString
            },
            comenRep: {
                type: GraphQLString
            }
        }
    }
});



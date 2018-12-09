var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;

var ciudadType = require('../types/ciudadType').ciudadType;
var provinciaType = require('../types/provinciaType').provinciaType;

// Auto Type
exports.clienteType = new GraphQLObjectType({
    name: 'clientes',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idCliente: {
                type: GraphQLInt
            },
            apellido: {
                type: GraphQLString
            },
            nombre: {
                type: GraphQLString
            },
            telefono: {
                type: GraphQLString
            },
            celular: {
                type: GraphQLString
            },
            direccion: {
                type: GraphQLString
            },
            direccion2: {
                type: GraphQLString
            },
            comentario: {
                type: GraphQLString
            },
            idCiudad:{
                type: GraphQLInt
            },
            ciudad: {
                type: ciudadType,
                resolve: async (cliente) => {
                    const laciudad = await CiudadesModel.findOne({'idCiudad': cliente.idCiudad});
                    if (!laciudad) {
                        throw new Error('error while fetching data ciudad related')
                    }
                    return laciudad;
                }
            },
            idProvincia: {
                type: GraphQLInt
            },
            provincia: {
                type: provinciaType,
                resolve: async (cliente) => {
                    const laprovincia = await ProvinciasModel.findOne({'idProvincia': cliente.idProvincia});
                    if (!laprovincia) {
                        throw new Error('error while fetching data provincia related')
                    }
                    return laprovincia;
                }
            },
            fechaAlta: {
                type: GraphQLString
            }
        }
    }
});



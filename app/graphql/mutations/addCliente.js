var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var clienteType = require('../types/clienteType');
var clienteModel = require('../../models/cliente');

exports.add = {
    type: clienteType.clienteType,
    args: {
        apellido: {
            type: new GraphQLNonNull(GraphQLString)
        },
        nombre: {
            type: new GraphQLNonNull(GraphQLString)
        },
        telefono: {
            type: GraphQLString
        },
        celular: {
            type: GraphQLString
        },
        direccion: {
            type: new GraphQLNonNull(GraphQLString)
        },
        direccion2: {
            type: GraphQLString
        },
        comentario: {
            type: GraphQLString
        },
        idCiudad:{
            type: new GraphQLNonNull(GraphQLInt)
        },
        idProvincia: {
            type: new GraphQLNonNull(GraphQLInt)
        }

    },
    resolve: async (root, args) => {
        const uModel = new clienteModel(args);
        const newCliente = await uModel.save();
        if (!newCliente) {
            throw new Error('error');
        }
        return newCliente
    }
};

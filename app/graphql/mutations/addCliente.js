var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var clienteType = require('../types/clienteType');
var clienteModel = require('../../models/cliente');

exports.add = {
  type: clienteType.clienteType,
  args: {
    apellido: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nombre: {
      type: new GraphQLNonNull(GraphQLString),
    },
    telefono: {
      type: new GraphQLNonNull(GraphQLString),
    },
    celular: {
      type: new GraphQLNonNull(GraphQLString),
    },
    direccion: {
      type: new GraphQLNonNull(GraphQLString),
    },
    direccion2: {
      type: new GraphQLNonNull(GraphQLString),
    },
    comentario: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: async(root, args)=> {
    const uModel = new clienteModel(args);
    const newCliente = await uModel.save();
    if (!newCliente) {
      throw new Error('error');
    }
    return newCliente
  }
};

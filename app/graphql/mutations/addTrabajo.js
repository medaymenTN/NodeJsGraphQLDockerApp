var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var trabajoType = require('../types/trabajoType');
var trabajoModel = require('../../models/trabajo');

exports.add = {
  type: trabajoType.trabajoType,
  args: {
      idCliente:{
          type: new GraphQLNonNull(GraphQLInt)
      },
      idAuto:{
          type: new GraphQLNonNull(GraphQLInt)
      },
      presupuesto: {
          type: new GraphQLNonNull(GraphQLString)
      },
      manoObra: {
          type: new GraphQLNonNull(GraphQLString)
      },
      repuestos: {
          type: new GraphQLNonNull(GraphQLString)
      },
      comentario: {
          type: new GraphQLNonNull(GraphQLString)
      },
      estado: {
          type: new GraphQLNonNull(GraphQLString)
      },
      fechaDespacho: {
          type: new GraphQLNonNull(GraphQLString)
      },
      fechaTurno: {
          type: new GraphQLNonNull(GraphQLString)
      },
      horaTurno: {
          type: new GraphQLNonNull(GraphQLString)
      },
      fechaCierre: {
          type: new GraphQLNonNull(GraphQLString)
      },
      seguro: {
          type: new GraphQLNonNull(GraphQLString)
      },
      company: {
          type: new GraphQLNonNull(GraphQLString)
      },
      comenRep: {
          type: new GraphQLNonNull(GraphQLString)
      }
  },
  resolve: async(root, args)=> {

    console.log(args);
    const uModel = new trabajoModel(args);
    const newTrabajo = await uModel.save();
    if (!newTrabajo) {
      throw new Error('error');
    }
    return newTrabajo
  }
};

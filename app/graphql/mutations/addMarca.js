var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var marcaType = require('../types/marcaType');
var marcaModel = require('../../models/marca');

exports.add = {
  type: marcaType.marcaType,
  args: {
    marca: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: async(root, args)=> {
    const uModel = new marcaModel(args);
    const newmarca = await uModel.save();

    if (!newmarca) {
      throw new Error('error');
    }

    return newmarca
  }
};

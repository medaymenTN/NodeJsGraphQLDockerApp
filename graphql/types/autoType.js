var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
//var GraphQLSDateTime = require('graphql').GraphQLString;

//TODO Add a new data type DATETIME to the graphql (CHM75)

// Auto Type
exports.autoType = new GraphQLObjectType({
  name: 'autos',
  fields:  () =>{
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      modelo: {
        type: GraphQLString
      },
      tipo: {
        type: GraphQLString
      },
      patente: {
        type: GraphQLString
      },
      color: {
        type: GraphQLString
      },
      fechaAlta: {
        type: GraphQLString
      } 
    }
  }
});



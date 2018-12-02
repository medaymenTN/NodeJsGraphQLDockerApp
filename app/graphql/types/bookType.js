var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// Book Type
exports.bookType = new GraphQLObjectType({
  name: 'book',
  fields:  () =>{
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      },
      author: {
        type: GraphQLString
      }
    }
  }
});



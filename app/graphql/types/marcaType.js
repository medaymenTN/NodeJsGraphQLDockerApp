var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;


// Auto Type
exports.marcaType = new GraphQLObjectType({
    name: 'marcas',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idMarca: {
                type: GraphQLInt,
            },
            marca: {
                type: GraphQLString
            }
        }
    }
});



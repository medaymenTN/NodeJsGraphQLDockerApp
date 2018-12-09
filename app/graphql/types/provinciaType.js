var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;


// Auto Type
exports.provinciaType = new GraphQLObjectType({
    name: 'provincias',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idProvincia: {
                type: GraphQLInt
            },
            provincia: {
                type: GraphQLString
            },
            codProvincia:{
                type: GraphQLString
            },
            idPais: {
                type: GraphQLString
            }
        }
    }
});



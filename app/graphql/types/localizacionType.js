var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;


// Auto Type
exports.localizacionType = new GraphQLObjectType({
    name: 'localizaciones',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idLocalizacion: {
                type: GraphQLInt
            },
            localizacion: {
                type: GraphQLString
            }
        }
    }
});



var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;



// Ciudad Type
exports.ciudadType = new GraphQLObjectType({
    name: 'ciudades',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idCiudad: {
                type: GraphQLInt
            },
            idProvincia: {
                type: GraphQLInt
            },
            ciudad: {
                type: GraphQLString
            },
            ciudadCorta:{
                type: GraphQLString
            }
        }
    }
});

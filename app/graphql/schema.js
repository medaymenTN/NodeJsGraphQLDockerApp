var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var mutation = require('./mutations/mutation');

//Book Schema
var queryType = require('./queries/query').query;


const schema = new GraphQLSchema({
    query: queryType,
    mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
});



module.exports = { schema };
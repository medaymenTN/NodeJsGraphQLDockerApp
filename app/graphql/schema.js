var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var mutation = require('./mutations/mutation');

//Book Schema
var queryType = require('./queries/bookQuery').bookQuery;


const bookSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
});

//Auto Schema
/*
var autoQueryType = require('./queries/autoQuery').autoQuery;


const autoSchema = new GraphQLSchema({
    query: autoQueryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
});
*/




module.exports = { bookSchema };
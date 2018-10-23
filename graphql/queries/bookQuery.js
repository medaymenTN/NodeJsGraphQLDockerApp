var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var BookModel = require('../../models/book');
var bookType = require('../types/bookType').bookType;

// Query
exports.BookQuery = new GraphQLObjectType({
  name: 'Query',
  fields:  ()=> {
    return {
      books: {
        type: new GraphQLList(bookType),
        resolve: function () {
          const books = BookModel.find().exec()
          if (!books) {
            throw new Error('Error')
          }
          return books
        }
      }
    }
  }
});
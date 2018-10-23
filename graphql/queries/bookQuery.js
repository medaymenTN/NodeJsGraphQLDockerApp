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
        resolve:  async ()=> {
          const books = await BookModel.find()
          if (!books) {
            throw new Error('error while fetching data')
          }
          return books
        }
      }
    }
  }
});
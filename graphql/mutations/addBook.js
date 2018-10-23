var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('../types/bookType');
var bookModel = require('../../models/book');
exports.add = {
  type: bookType.bookType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
        type: new GraphQLNonNull(GraphQLString),
      }
  },
  resolve(root, args) {
      console.log(args)
    const uModel = new bookModel(args);
    const newBook = uModel.save();
    if (!newBook) {
      throw new Error('Error');
    }
    return newBook
  }
}

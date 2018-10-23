var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('../types/bookType');
var bookModel = require('../../models/book');

exports.remove = {
  type: bookType.bookType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, args) {
    const removedBook = bookModel.findByIdAndRemove(args.id).exec();
    if (!removedBook) {
      throw new Error('Error')
    }
    return removedBook;
  }
}

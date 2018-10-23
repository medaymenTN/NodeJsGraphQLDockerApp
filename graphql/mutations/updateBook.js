var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('../types/bookType');
var bookModel = require('../../models/book');

exports.update = {
    type: bookType.bookType,
    args: {
        id: {

            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        author: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, args) {
        const UpdatedBook = bookModel.findByIdAndUpdate(args.id).exec();
        if (!UpdatedBook) {
          throw new Error('Error')
        }
        return UpdatedBook;
    }
}

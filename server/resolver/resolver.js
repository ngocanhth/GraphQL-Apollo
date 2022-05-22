const { books, authors } = require('../data/static');

const resolvers = {
   // QUERY

    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id.toString() === args.id),
        authors: () => authors,
        author: (parent, args) => {
            console.log("Kiem tra kieu du lieu", typeof(authors[0].id));
          return  authors.find(author => author.id == args.id)
        }
    },

    Book: {
        author: (parent, args) => {
           // console.log(parent);
            // console.log(authors.find(author => author.id == parent.authorId));
             return authors.find(author => author.id == parent.authorId);
        }
    },

    Author: {
        books: (parent, args) => {
            console.log(parent);
            console.log("Lan dau tien ma tao author se ra undefine:", books.find(book => book.authorId === parent.id));
            return books.filter(book => book.authorId === parent.id);
        }
    },

    //MUTATION

    Mutation: {
        createAuthor: (parent, args) => args,
        createBook: (parent, args) => args
    }
}

module.exports = resolvers
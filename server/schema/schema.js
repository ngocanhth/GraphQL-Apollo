const {gql} = require('apollo-server-express')
const typeDefs = gql`
    type Book {
        id: ID,
        name: String,
        genre: String,
        author: Author
    }

    type Author {
        id: ID!, # dau ! sau ID co nghe la bat buoc phai la 1 ID khong dc phep null
        name: String,
        age: Int,
        books: [Book]
    }
    # ROOT TYPE
    type Query {
        books: [Book]
        book (id: ID!): Book
        authors: [Author]
        author (id: ID!): Author
    }

    type Mutation {
        createAuthor(id: ID!, name: String, age: Int): Author
        createBook(id: ID!, name: String, genre: String, authorId: ID!): Book
    }
`

module.exports = typeDefs
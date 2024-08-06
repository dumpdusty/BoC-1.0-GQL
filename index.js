const {ApolloServer} = require('apollo-server')
const mongoose = require ('mongoose')
const typeDefs = require ('./graphql/typeDefs')
const resolvers = require ('./graphql/resolvers')


const MONGODB = 'mongodb+srv://dd-db:Pirate666@cluster0.js9ik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log(`MongoDB connection successful`);
    return server.listen({port: 5000})
})
.then((res) => {
    console.log(`Server running at ${res.url}`)
})
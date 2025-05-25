import graphql, { GraphQLSchema } from "graphql"
import axios from "axios";
import _ from "lodash"

const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql

const users = [
    {
        id: "1",
        firstName: "Jack",
        age: 20
    },
    {
        id: "2",
        firstName: "John",
        age: 30
    },
    {
        id: "3",
        firstName: "Mickenzie",
        age: 50
    }
]

//create user Object

const userType = new GraphQLObjectType({
    name: "user",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

//define Root Query

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: userType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://127.0.0.1:9000/users/${args.id}`)
                    .then((response) => response.data)
            }
        }
    }
})

//addUser -> insert & update

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addNewUser: {
            type: userType,
            args: {
                firstName: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parentValue, args) {
                const { firstName, age } = args;
                return axios.post(`http://127.0.0.1:9000/users`, { firstName, age })
                    .then((response) => response.data)
                    .catch(error => {
                        throw new Error(error);
                    })
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})

export { schema }
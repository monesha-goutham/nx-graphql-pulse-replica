
import {gql} from "apollo-server"


// define types for data and queries
export const typicodeSchema = gql`
     
    type Post{

        userId: Int
        id: Int
        title: String
        body: String

    }



    # queries
    type Query {
        getPostsList: [Post]
        getPost(id:Int!) : Post
        
    }
`
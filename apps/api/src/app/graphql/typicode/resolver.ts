/* eslint-disable @typescript-eslint/no-unused-vars */
import { IResolvers } from "graphql-tools"



// create resolvers for the queries

export const typicodeResolvers: IResolvers = {
    Query : {
        getPostsList : async (_ :any, {args}: any, {dataSources}:any) => {

            const data = await dataSources.jsonPlaceHolderAPI.getPostsList()
            return data;
        },

        getPost:  async (_ :any, {id}: any, {dataSources}:any)  => {

            const data = await dataSources.jsonPlaceHolderAPI.getPost(id)
            return data;
        }
    }
}
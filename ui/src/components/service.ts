import {useQuery} from "react-query"
import {GraphQLClient,request} from "graphql-request"

export const useGqlQuery = (key:string,query:any,variables?:any,config={}) => {
    const endpoint = "https://api.github.com/graphql"
    const headers = {
        headers :{
            authorization:"Bearer 1f7221842c93cfd7bb7f3d0c02f9b757409901d8"
        }
    }
    const graphqlCient = new GraphQLClient(endpoint,headers)
    const fetchData = async () => await graphqlCient.request(query)

    // const fetchData = async () => await request(endpoint,query)
    return useQuery(key,fetchData)
}
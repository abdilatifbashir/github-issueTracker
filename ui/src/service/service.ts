import {useQuery} from "react-query"
import {GraphQLClient,request} from "graphql-request"

export const useGqlQuery = (key:string,query:any,variables?:any,config={}) => {
    const endpoint = "https://api.github.com/graphql"
    const headers = {
        headers :{
            authorization:"Bearer  fc09e6335db615a248243705517695e2d718cad5"
        }
    }
    const graphqlCient = new GraphQLClient(endpoint,headers)
    const fetchData = async () => await graphqlCient.request(query)

    // const fetchData = async () => await request(endpoint,query)
    return useQuery(key,fetchData)
}
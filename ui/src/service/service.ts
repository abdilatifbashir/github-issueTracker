import { useQuery } from "react-query";
import { GraphQLClient, request } from "graphql-request";

export const useGqlQuery = (
  key: string,
  query: any,
  variables?: any,
  config = {}
) => {
  const endpoint = "https://api.github.com/graphql";
  const headers = {
    headers: {
      authorization: "Bearer 3e30760b950bf480ce096624f2d1e1d8f24f0895",
    },
  };
  const graphqlCient = new GraphQLClient(endpoint, headers);
  const fetchData = async () => await graphqlCient.request(query);

  // const fetchData = async () => await request(endpoint,query)
  return useQuery(key, fetchData);
};

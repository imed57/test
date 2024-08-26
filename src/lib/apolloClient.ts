import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const extClient = (uri: string) =>
  new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
  });

export const apolloExt = async (queryString: string, uri: string) => {
  try {
    return await extClient(uri).query({
      query: gql(queryString),
    });
  } catch (err) {
    console.error("external graph ql api error: ", err);
  }
};

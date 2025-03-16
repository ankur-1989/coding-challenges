import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
      }),
    })
);

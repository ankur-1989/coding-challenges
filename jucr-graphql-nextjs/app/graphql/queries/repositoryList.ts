import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories($login: String!, $first: Int = 10) {
    user(login: $login) {
      repositories(first: $first) {
        nodes {
          id
          name
          description
          isPrivate
          languages(first: 10) {
            nodes {
              name
            }
          }
          stargazerCount
          owner {
            login
            avatarUrl
          }
        }
      }
    }
  }
`;

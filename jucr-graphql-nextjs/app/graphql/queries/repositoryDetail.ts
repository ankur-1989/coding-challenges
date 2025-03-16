import { gql } from "@apollo/client";

export const GET_REPOSITORY_DETAIL = gql`
  query GetRepositoryDetail($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      createdAt
      stargazerCount
      isPrivate
    }
  }
`;

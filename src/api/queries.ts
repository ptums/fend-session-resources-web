import { gql } from "graphql-request";
export const sessionQuery = gql`
  query {
    sessions {
      title
      completed
      solution {
        url
      }
      lessonActivity {
        url
      }
      closeDate
      types
   }
  }
  `;
export const gameQuery = gql`
  query {
    games {
      title
      url
      types
    }
  }
  `;

import { gql } from "graphql-request";
export const sessionQuery:string = gql`
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
export const gameQuery:string = gql`
  query {
    games {
      title
      url
      types
    }
  }
  `;

export const tutorialQuery:string = gql`
query {
  tutorials {
    title
    videoUrl
    category
  }
}
`;

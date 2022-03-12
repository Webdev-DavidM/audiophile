import { gql } from '@apollo/client';

export const getAllProductsByCategory = gql`
  query GetProduct($category: String!) {
    getAllProductsByCategory(category: $category) {
      name
      image {
        mobile
        tablet
        desktop
      }
      description
      slug
      new
    }
  }
`;

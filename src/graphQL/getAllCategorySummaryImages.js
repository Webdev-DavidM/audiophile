import { gql } from '@apollo/client';

export const getAllCategorySummaryImages = gql`
  query GetAllCategoryImages {
    getAllProducts {
      categorySummaryImages {
        category
        image
      }
    }
  }
`;

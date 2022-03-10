import { gql } from '@apollo/client';

export const getAllProductsAndCategories = gql`
  query {
    getAllProducts {
      id
      stock
      slug
      name
      image {
        mobile
        tablet
        desktop
      }
      categoryImage {
        mobile
        tablet
        desktop
      }
      new
      price
      description
      features
      items {
        quantity
        item
      }
      gallery {
        first {
          mobile
          tablet
          desktop
        }
        second {
          mobile
          tablet
          desktop
        }
        third {
          mobile
          tablet
          desktop
        }
      }
      others {
        slug
        name
        image
      }
      category
    }
  }
`;

import { gql } from '@apollo/client';

export const getProduct = gql`
  query GetProduct($slug: String!) {
    getProduct(slug: $slug) {
      code
      success
      product {
        stock
        name
        image {
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
            tablet
            mobile
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
      }
    }
  }
`;

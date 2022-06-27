import {gql} from "@apollo/client"

export const GET_PRODUCT_BY_SKU = gql`
    query getCategoryById($sku : String) {
        products(
            search: ""
            filter: {sku: {eq: $sku}}
          ) {
            items {
                name
                image {
                  url
                }
                price_range {
                  minimum_price {
                    final_price {
                      value
                    }
                  }
                  maximum_price {
                    final_price {
                      value
                    }
                  }
                }
                description {
                  html
                }
              }
            total_count
          }
    }
`

export const SUBSCRIBE = gql`
    mutation subscribe($email : String) {
        subscribe(input: {email: $email}) {
            status {
              code
              message
              response
            }
          }
    }
`
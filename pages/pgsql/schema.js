import {gql} from "@apollo/client"

export const GET_CATEGORIES = gql`
    query getCategories {
        categories(filters: {}) {
            items {
              id
              name
              image
            }
            total_count
          }
    }
`

export const GET_CATEGORY_BY_ID = gql`
    query getCategoryById($id : Int) {
        category(id: $id) {
            name
            products{
              items {
                name
                sku
              }
              total_count
            }
        }
    }
`
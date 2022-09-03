import { GraphQLClient } from 'graphql-request'

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT)

export const getPostDetails = async (slug) => {
  const query = `
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        
        richtext {
          html
          markdown
          raw
        }

        bigGallery {
          title
          photo {
            url
          }
          description {
            html
            markdown
            raw
          }
        }

        pageHeader {
          articleCreatedDate
          coverImage {
            url
          }
          title
        }
        gallery {
          caption
          photo {
            url
          }
        }

        restaurants {
            id
            rating
            restaurantName
            featuredDish
            dianpingUrl
            description
        }

        destinations {
            mapUrl
            id
            destinationDescComp {
              id
              placeName
              placeDescription
            }
            destinationMap {
              url
            }
            
        }

        transport {
            id
            map {
                url
            }
            roadInfo {
                recommendation
                roadFeasibility
                roadName
                roadScenery
                trafficCar
                trafficTruck
            }
            richText{
              html
              markdown
              raw
            }
        }


        title
        overview
        featuredImg {
            url
            width
            height
        }
        slug
        author
        createdAt
        categories {
            name
        }
      }
    }
  `
  const result = await graphcms.request(query, { slug })

  return result.post
}

export const getPosts = async () => {
  const query = `
    query GetPosts() {
      posts{
        title
        slug
      }
    }
  `
  const result = await graphcms.request(query)

  return result.posts
}

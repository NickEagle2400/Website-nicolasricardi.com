import { GraphQLClient, gql } from 'graphql-request'

const endpoint = process.env.HYGRAPH_PUBLIC_API
const authToken = process.env.HYGRAPH_AUTH_TOKEN

export const getBlogPosts = async () => {


    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            authorization: authToken,
        },
    })

    
    const query = gql`
    query getPosts {
        blogPostsConnection {
            edges {
                node {
                    excerpt
                    featuredPost
                    publishedAt
                    slug
                    title
                    updatedAt
                    author {
                        bio
                        name
                        profilePicture {
                            url
                        }
                    }
                    categories {
                        name
                        slug
                    }
                    content {
                        html
                    }
                    cover {
                        url
                    }
                }
            }
        }
    }
    `

    const results = await graphQLClient.request(query)
        
    console.log(results)

    return results
}

getBlogPosts().catch((error) => console.error(error))
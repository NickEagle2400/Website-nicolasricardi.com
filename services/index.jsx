import { graphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.HYGRAPH_PUBLIC_API

export const getBlogPosts = async () => {

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            authorization: process.env.HYGRAPH_AUTH_TOKEN,
        },
    })

    
    const query = gql`
    query MyQuery {
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
    console.log(JSON.stringify(data, undefined, 2))

    return results.blogPostsConnection.edges
}


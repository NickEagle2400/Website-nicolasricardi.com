import { graphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.HYGRAPH_PUBLIC_API

export const getBlogPosts = async () => {

    const graphQLClient = new GraphQLClient(process.env.HYGRAPH_PUBLIC_API, {
        headers: {
            authorization: process.env.HYGRAPH_AUTH_TOKEN,
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

    const results = await graphQLClient.request(query).then(
            console.log(data)
        )
        .catch(
            console.log(e)
        )
        
    console.log(JSON.stringify(results, undefined, 2))

    return results.blogPostsConnection.edges
}


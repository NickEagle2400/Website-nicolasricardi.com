import { GraphQLClient, gql, request } from 'graphql-request'


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
                        cover {
                            url
                        }
                    }
                }
            }
        }
    `

    const results = await graphQLClient.request(query)
        
    return results
}

export const getPostContent = async ( slug ) => {


    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            authorization: authToken,
        },
    })

    const variables = {
        slug: slug,
    }

    
    const query = gql`
        query getPostContent($slug: String!) {
            blogPost(where: {slug: $slug}) {
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
                    raw
                }
                cover {
                    url
                }
            }
        }
    `

    const results = await graphQLClient.request(query,variables)
        
    console.log(results)

    return results.blogPost
}

import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.HYGRAPH_PUBLIC_API

export const getBlogPosts = async () => {
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

    const results = await request(graphqlAPI, query)

    return results.blogPostsConnection.edges
}


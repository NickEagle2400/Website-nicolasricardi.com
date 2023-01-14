import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.HYGRAPH_PUBLIC_API

export const getBlogPosts = async () => {
    const query = gql`
        query MyQuery {
            blogPosts(orderBy: publishedAt_DESC) {
                title
                slug
                publishedAt
                updatedAt
                excerpt
                featuredPost
                author {
                    name
                    bio
                    profilePicture {
                        fileName
                        url
                    }
                }
                categories {
                    name
                    slug
                }
                cover {
                    url
                    fileName
                }
                content {
                    html
                }
            }
        }  
    `

    const results = await request(graphqlAPI, query)

    return results
}


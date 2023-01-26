import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { StandardLayout } from '../../layout'
import { BlogPostSidebar, BoxCallToAction, SeoHead } from '../../components'
import BlogPostContent from '../../components/BlogPostContent'
import { getBlogPosts, getPostContent} from '../../services'


const SingleBlogPost = ({post}) => {

    console.log(post.seoMetadata)

    return (
        <StandardLayout>
            <SeoHead 
                pageURL={"https://www.nicolasricardi.com/blog/".concat(post.slug)}
                pageTitle={post.seoMetadata.metaTitle}
                pageDesc={post.seoMetadata.metaDescription}
                pageSocialTitle={post.seoMetadata.socialTitle}
                pageSocialDesc={post.seoMetadata.SocialDescription}
                pageKeywords={post.seoMetadata.metaKeywords}
                pageCover={post.seoMetadata.socialImage.url}
                websiteDomain="nicolasricardi.com"
            />
            <section className="relative pt-0 pb-12 md:py-20 bg-black">
                <div className="w-full px-0 md:px-4 mx-auto xl:px-0 xl:max-w-7xl">
                    <div className="w-full flex flex-col md:flex-row gap-12">
                        <BlogPostContent post={post}/>
                        <BlogPostSidebar />
                    </div>
                </div>
            </section>
            <BoxCallToAction />
        </StandardLayout>
    )
}

export default SingleBlogPost

export async function getStaticPaths(){
    const posts = await getBlogPosts()

    const paths = posts.blogPostsConnection.edges.map((post) => ({
        params: { key: post.slug},
    }))

    return{
        paths: posts.blogPostsConnection.edges.map(({node: {slug}})=>({params:{slug}})),
        fallback:false,
    }
}

export async function getStaticProps({ params }) {
    const data = await getPostContent(params.slug)

    return {
        props: {post: data}
    }
}

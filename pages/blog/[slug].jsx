import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { StandardLayout } from '../../layout'
import { BlogPostSidebar, BoxCallToAction, SeoHead } from '../../components'
import BlogPostContent from '../../components/BlogPostContent'
import { getBlogPosts, getPostContent} from '../../services'


const SingleBlogPost = ({post}) => {

    var blogPostURL="test"
    var blogPostTitle="test"
    var blogPostDesc="test"
    var blogPostSocialDesc="test"
    var blogPostKeywords="test"
    var blogPostCover="test"

    return (
        <StandardLayout>
            <SeoHead 
                pageURL={"https://wwww.nicolasricardi.com/".concat(blogPostURL)}
                pageTitle={blogPostTitle.concat(" - Nicolas Ricardi")}
                pageDesc={blogPostDesc}
                pageSocialDesc={blogPostSocialDesc}
                pageKeywords={blogPostKeywords}
                pageCover={blogPostCover}
                websiteDomain="nicolasricardi.com"
            />
            <section className="relative py-12 xl:py-20 bg-black">
                <div className="w-full px-4 mx-auto xl:px-0 xl:max-w-7xl">
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

import Head from 'next/head'
import Image from 'next/image'
import { SidebarLayout, StandardLayout } from '../../layout'
import { BlogHero, BoxCallToAction, FeaturedPosts, BlogRoll, SidebarBlog } from '../../components'
import {getBlogPosts} from '../../services'


const Blog = ({posts}) => {
    return (
        <StandardLayout pageTitle="Blog - Nicolas Ricardi">
            <BlogHero />
            <FeaturedPosts />
            <SidebarLayout >
                <BlogRoll 
                    blogPosts={posts}
                />
                <SidebarBlog />
            </SidebarLayout>
            <BoxCallToAction />
        </StandardLayout>
    )
}

export default Blog

export async function getStaticProps() {
    const posts = await getBlogPosts()

    return {
        props: {posts}
    }
}
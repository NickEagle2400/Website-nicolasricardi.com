import Head from 'next/head'
import Image from 'next/image'
import { SidebarLayout, StandardLayout } from '../../layout'
import { BlogHero, BoxCallToAction, FeaturedPosts } from '../../components'


const Blog = () => {
    return (
        <StandardLayout pageTitle="Blog - Nicolas Ricardi">
            <BlogHero />
            <FeaturedPosts />
            <SidebarLayout />
            <BoxCallToAction />
        </StandardLayout>
    )
}

export default Blog

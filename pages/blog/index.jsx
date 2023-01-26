import Head from 'next/head'
import Image from 'next/image'
import { SidebarLayout, StandardLayout } from '../../layout'
import { BlogHero, BoxCallToAction, FeaturedPosts, BlogRoll, SidebarBlog, SeoHead } from '../../components'
import {getBlogPosts} from '../../services'


const Blog = ({posts}) => {

    const metadata = {
        url:"https://wwww.nicolasricardi.com/blog",
        metaTitle:"Blog di Nicolas Ricardi - Web Developer Freelance",
        metaDescription:"In questo blog troverai articoli che parleranno di architettura dell'informazione, web development, SEO e ottimizzazione del tasso di conversione.",
        socialTitle:"Blog di Nicolas Ricardi - Web Developer Freelance",
        SocialDescription:"In questo blog troverai articoli che parleranno di architettura dell'informazione, web development, SEO e ottimizzazione del tasso di conversione.",
        metaKeywords:"Blog sviluppo web, blog web design, nicolas ricardi, nicolas ricardi blog",
        socialImage:{
            url:"https://wwww.nicolasricardi.com/assets/img/coverHome.png",
        },
        domain:"nicolasricardi.com"
    }

    return (
        <StandardLayout>
            <SeoHead 
                pageURL={metadata.url}
                pageTitle={metadata.metaTitle}
                pageDesc={metadata.metaDescription}
                pageSocialTitle={metadata.socialTitle}
                pageSocialDesc={metadata.SocialDescription}
                pageKeywords={metadata.metaKeywords}
                pageCover={metadata.socialImage.url}
                websiteDomain={metadata.domain}
            />
            <BlogHero />
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
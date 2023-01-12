import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { StandardLayout } from '../../layout'
import { BlogPostSidebar, BoxCallToAction } from '../../components'
import BlogPostContent from '../../components/BlogPostContent'

const SingleBlogPost = () => {
    return (
        <StandardLayout pageTitle="Blog - Nicolas Ricardi">
            <section class="relative py-12 xl:py-20 bg-black">
                <div class="w-full px-4 mx-auto xl:px-0 xl:max-w-7xl">
                    <div class="w-full flex flex-col md:flex-row gap-12">
                        <BlogPostContent />
                        <BlogPostSidebar />
                    </div>
                </div>
            </section>
            <BoxCallToAction />
        </StandardLayout>
    )
}

export default SingleBlogPost

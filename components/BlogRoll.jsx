import Link from 'next/link'
import Image from 'next/image'
import BlogPostCover from '../public/assets/img/test-blog.jpeg'
import {getBlogPosts} from '../services'


const BlogRoll = ({posts}) => {

    console.log(posts)

    return(
        <div className="w-full md:w-2/3">
            <h2 className="text-2xl xl:text-3xl font-medium xl:font-bold text-white leading-snug mb-16 mt-0 text-center xl:text-left">Gli ultimi articoli dal blog</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
                {posts?.map((post) => 
                    <PostCard
                        URL=""
                        title=""
                        coverImgURL=""
                        categories=""
                        categoriesURL=""
                        author=""
                        authorImgURL=""
                        date=""
                        key={post.title}
                    />
                )}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const posts = await getBlogPosts()

    return {
        props: {posts}
    }
}

export default BlogRoll
import Link from 'next/link'
import Image from 'next/image'
import BlogPostCover from '../public/assets/img/test-blog.jpeg'
import {PostCard} from '../components'


const BlogRoll = (props) => {

    const posts = props.blogPosts.blogPostsConnection

    console.log(props)

    return(
        <div className="w-full md:w-2/3">
            <h2 className="text-2xl xl:text-3xl font-medium xl:font-bold text-white leading-snug mb-16 mt-0 text-center xl:text-left">Gli ultimi articoli dal blog</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
                {posts.edges?.map((post) => 
                        <PostCard
                            postURL={post.node.slug}
                            title={post.node.title}
                            coverImgURL={post.node.cover.url}
                            category={post.node.categories}
                            author={post.node.author.name}
                            key={post.node.title}
                        />
                    )}
            </div>
        </div>
    )
}

export default BlogRoll



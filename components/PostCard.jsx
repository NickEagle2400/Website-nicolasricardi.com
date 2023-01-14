import Link from "next/link"

const PostCard = (props) => {
    
    return(
        <article className="w-full bg-zinc-900 rounded-md overflow-hidden transition-transform duration-200 hover:-translate-y-2">
            <div className="">    
                <a className="block" href="/single/">
                    <Image src={BlogPostCover} alt="" />
                </a>
                <div className="px-4 py-8">
                    <p className="mb-3">
                        <a href="" className="text-gray-400 font-ligh ">SEO</a>
                    </p>
                    <h3 className="text-white text-2xl">
                        <a href="#">
                            {posts?.data.blogPosts[0].title}
                        </a>
                    </h3>
                </div>
            </div>
        </article>
    )
}

export default PostCard
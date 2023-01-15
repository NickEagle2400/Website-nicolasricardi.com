import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'


const BlogPostContent = (props) => {
    console.log(props)

    return(
        <div className="w-full md:w-2/3">
            <div className="w-full bg-white px-6 md:px-10 py-10 md:rounded-md">
                <h1 className="text-3xl xl:text-5xl text-black font-bold leading-normal xl:leading-tight">{props.post.title}</h1>
                <div className="flex gap-2 items-center mt-8">
                    <div className="w-12 h-12 rounded-full overflow-hidden drop-shadow">
                        <Image src={props.post.author.profilePicture.url} alt="" className="w-full h-full" fill style={{objectFit: 'cover'}} />
                    </div>
                    <p className="text-zinc-800 text-sm">{props.post.author.name}</p>
                    <p className="text-zinc-800 text-sm">|</p>
                    <p className="text-zinc-800 text-sm">{moment(props.post.updatedAt).format('DD MMM YYYY')}</p>
                </div>
                <div className="my-12 rounded-md drop-shadow min-h-[460px]">
                    <Image src={props.post.cover.url} alt="" fill style={{objectFit: 'cover'}}/>
                </div>
                <div className="" id="blogPostContent" dangerouslySetInnerHTML={{__html:props.post.content.html}}></div>
            </div>
        </div>
    )
}

export default BlogPostContent





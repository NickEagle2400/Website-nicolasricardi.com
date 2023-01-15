import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'


const BlogPostContent = (props) => {
    console.log(props)

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }
    
            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }
    
            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }
    
            switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                <img
                    key={index}
                    alt={obj.title}
                    height={obj.height}
                    width={obj.width}
                    src={obj.src}
                />
                );
            default:
                return modifiedText;
            }
        }

    return(
        <div className="w-full md:w-2/3">
            <div className="w-full bg-white px-10 py-10 rounded-md">
                <h1 className="text-3xl xl:text-5xl text-black font-bold leading-normal xl:leading-tight">{props.post.title}</h1>
                <div className="flex gap-2 items-center mt-8">
                    <div className="w-12 h-12 rounded-full overflow-hidden drop-shadow">
                        <Image src={props.post.author.profilePicture.url} alt="" className="w-full h-full" fill style={{objectFit: 'cover'}} />
                    </div>
                    <p className="text-zinc-800 text-sm">{props.post.author.name}</p>
                    <p className="text-zinc-800 text-sm">|</p>
                    <p className="text-zinc-800 text-sm">{moment(props.post.updatedAt).format('DD MMM YYYY')}</p>
                </div>
                <div className="my-12 rounded-md overflow-hidden drop-shadow">
                    <Image src={props.post.cover.url} alt="" fill/>
                </div>
                <div className="" id="blogPostContent">
                    {props.post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>



                <p className="text-zinc-800 text-lg mb-4 leading-relaxed">
                    Did you know? The average conversion rate through websites is 2.35% according to a study. So, irrespective of the type of industry that you are a part of, the average conversion rate is 2.35%. So, for every 1000 visitors, the average conversion numbers that you can expect is between 2 and 3. This is completely normal and it is a sign of a normal website. But, there is no denying that being alright is not enough in terms of performance, we have to be good. To reach that target, let’s go through some of the best sales strategies for better conversions.
                </p>
                <h2 id="1" className="text-xl xl:text-3xl text-black font-bold leading-normal xl:leading-tight mt-10 mb-4">Add strong CTAs</h2>
                <p className="text-zinc-800 text-lg mb-4 leading-relaxed">
                    Did you know? The average conversion rate through websites is 2.35% according to a study. So, irrespective of the type of industry that you are a part of, the average conversion rate is 2.35%. So, for every 1000 visitors, the average conversion numbers that you can expect is between 2 and 3. This is completely normal and it is a sign of a normal website. But, there is no denying that being alright is not enough in terms of performance, we have to be good. To reach that target, let’s go through some of the best sales strategies for better conversions.
                </p>
                <h2 id="2" className="text-xl xl:text-3xl text-black font-bold leading-normal xl:leading-tight mt-10 mb-4">Add strong CTAs</h2>
                <p className="text-zinc-800 text-lg mb-4 leading-relaxed">
                    Did you know? The average conversion rate through websites is 2.35% according to a study. So, irrespective of the type of industry that you are a part of, the average conversion rate is 2.35%. So, for every 1000 visitors, the average conversion numbers that you can expect is between 2 and 3. This is completely normal and it is a sign of a normal website. But, there is no denying that being alright is not enough in terms of performance, we have to be good. To reach that target, let’s go through some of the best sales strategies for better conversions.
                </p>
                <h2 id="3" className="text-xl xl:text-3xl text-black font-bold leading-normal xl:leading-tight mt-10 mb-4">Add strong CTAs</h2>
                <p className="text-zinc-800 text-lg mb-4 leading-relaxed">
                    Did you know? The average conversion rate through websites is 2.35% according to a study. So, irrespective of the type of industry that you are a part of, the average conversion rate is 2.35%. So, for every 1000 visitors, the average conversion numbers that you can expect is between 2 and 3. This is completely normal and it is a sign of a normal website. But, there is no denying that being alright is not enough in terms of performance, we have to be good. To reach that target, let’s go through some of the best sales strategies for better conversions.
                </p>
            </div>
        </div>
    )
}

export default BlogPostContent





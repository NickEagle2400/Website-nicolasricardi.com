import Link from "next/link"
import Image from "next/image"

const PostCard = (props) => {
    
    return(
        <article className="w-full bg-zinc-900 rounded-md overflow-hidden transition-transform duration-200 hover:-translate-y-2">
            <div className="">    
                <Link className="block relative" href={props.postURL}>
                    <Image src={props.coverImgURL} alt={props.title} fill style={{objectFit:"contain" }} />
                </Link>
                <div className="px-4 py-8">
                    <p className="mb-3">
                        <Link href={props.categoryURL} className="text-gray-400 font-ligh ">{props.category}</Link>
                    </p>
                    <h3 className="text-white text-2xl">
                        <Link href={props.postURL}>
                            {props.title}
                        </Link>
                    </h3>
                </div>
            </div>
        </article>
    )
}

export default PostCard
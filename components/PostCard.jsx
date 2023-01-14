import Link from "next/link"
import Image from "next/image"

const PostCard = (props) => {
    
    return(
        <article className="w-full bg-zinc-900 rounded-md overflow-hidden transition-transform duration-200 hover:-translate-y-2">
            <div className="">    
                <Link className="block relative min-h-[200px]" href={props.postURL}>
                    <Image src={props.coverImgURL} alt={props.title} fill style={{objectFit:"contain" }} />
                </Link>
                <div className="px-4 py-8">
                    <p className="mb-3">
                        {props.category?.map((cat) => 
                            <Link href={cat.slug} className="text-gray-400 font-ligh ">{cat.name}</Link>
                        )}
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
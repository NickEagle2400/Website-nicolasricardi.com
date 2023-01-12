import Link from 'next/link'
import Image from 'next/image'
import BlogPostCover from '../public/assets/img/test-blog.jpeg'


const BlogRoll = () => {
    return(
        <div class="w-full md:w-2/3">
            <h2 class="text-2xl xl:text-3xl font-medium xl:font-bold text-white leading-snug mb-16 mt-0 text-center xl:text-left">Gli ultimi articoli dal blog</h2>
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
                <article class="w-full bg-zinc-900 rounded-md overflow-hidden transition-transform duration-200 hover:-translate-y-2">
                    <div class="">    
                        <a class="block" href="/single/">
                            <Image src={BlogPostCover} alt="" />
                        </a>
                        <div class="px-4 py-8">
                            <p class="mb-3">
                                <a href="" class="text-gray-400 font-ligh ">SEO</a>
                            </p>
                            <h3 class="text-white text-2xl">
                                <a href="#">
                                    Quali sono i migliori tool da utilizzare per fare un audit SEO di un sito web?
                                </a>
                            </h3>
                        </div>
                    </div>
                </article>

                <article class="w-full bg-zinc-900 rounded-md overflow-hidden transition-transform duration-200 hover:-translate-y-2">
                    <div class="">    
                        <a class="block" href="">
                            <Image src={BlogPostCover} alt="" />
                        </a>
                        <div class="px-4 py-8">
                            <p class="mb-3">
                                <a href="" class="text-gray-400 font-ligh ">SEO</a>
                            </p>
                            <h3 class="text-white text-2xl">
                                <a href="#">
                                    Quali sono i migliori tool da utilizzare per fare un audit SEO di un sito web?
                                </a>
                            </h3>
                        </div>
                    </div>
                </article>

                <article class="w-full bg-zinc-900 rounded-md overflow-hidden transition-transform duration-200 hover:-translate-y-2">
                    <div class="">    
                        <a class="block" href="">
                            <Image src={BlogPostCover} alt="" />
                        </a>
                        <div class="px-4 py-8">
                            <p class="mb-3">
                                <a href="" class="text-gray-400 font-ligh ">SEO</a>
                            </p>
                            <h3 class="text-white text-2xl">
                                <a href="#">
                                    Quali sono i migliori tool da utilizzare per fare un audit SEO di un sito web?
                                </a>
                            </h3>
                        </div>
                    </div>
                </article>

                <article class="w-full bg-zinc-900 rounded-md overflow-hidden transition-transform duration-200 hover:-translate-y-2">
                    <div class="">    
                        <a class="block" href="">
                            <Image src={BlogPostCover} alt="" />
                        </a>
                        <div class="px-4 py-8">
                            <p class="mb-3">
                                <a href="" class="text-gray-400 font-ligh ">SEO</a>
                            </p>
                            <h3 class="text-white text-2xl">
                                <a href="#">
                                    Quali sono i migliori tool da utilizzare per fare un audit SEO di un sito web?
                                </a>
                            </h3>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default BlogRoll
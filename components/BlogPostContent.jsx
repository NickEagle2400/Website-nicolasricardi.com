import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Portrait from '../public/assets/img/me.png'
import BlogPostCover from '../public/assets/img/test-blog.jpeg'

const BlogPostContent = () => {
    return(
        <div class="w-full md:w-2/3">
            <div class="w-full bg-white px-10 py-10 rounded-md">
                <h1 class="text-3xl xl:text-5xl text-black font-bold leading-normal xl:leading-tight">7 Strategie per aumentare il tasso di conversione del tuo sito web</h1>
                <div class="flex gap-2 items-center mt-8">
                    <div class="w-12 h-12 rounded-full overflow-hidden drop-shadow">
                        <Image src={Portrait} alt="" class="w-full h-full" />
                    </div>
                    <p class="text-zinc-800 text-sm">Nicolas Ricardi</p>
                    <p class="text-zinc-800 text-sm">|</p>
                    <p class="text-zinc-800 text-sm">Aggiornato il 10 Gennaio 2023</p>
                </div>
                <div class="my-12 rounded-md overflow-hidden drop-shadow">
                    <Image src={BlogPostCover} alt="" />
                </div>
                <p class="text-zinc-800 text-lg mb-4 leading-relaxed">
                    Did you know? The average conversion rate through websites is 2.35% according to a study. So, irrespective of the type of industry that you are a part of, the average conversion rate is 2.35%. So, for every 1000 visitors, the average conversion numbers that you can expect is between 2 and 3. This is completely normal and it is a sign of a normal website. But, there is no denying that being alright is not enough in terms of performance, we have to be good. To reach that target, let’s go through some of the best sales strategies for better conversions.
                </p>
                <h2 id="1" class="text-xl xl:text-3xl text-black font-bold leading-normal xl:leading-tight mt-10 mb-4">Add strong CTAs</h2>
                <p class="text-zinc-800 text-lg mb-4 leading-relaxed">
                    Did you know? The average conversion rate through websites is 2.35% according to a study. So, irrespective of the type of industry that you are a part of, the average conversion rate is 2.35%. So, for every 1000 visitors, the average conversion numbers that you can expect is between 2 and 3. This is completely normal and it is a sign of a normal website. But, there is no denying that being alright is not enough in terms of performance, we have to be good. To reach that target, let’s go through some of the best sales strategies for better conversions.
                </p>
                <h2 id="2" class="text-xl xl:text-3xl text-black font-bold leading-normal xl:leading-tight mt-10 mb-4">Add strong CTAs</h2>
                <p class="text-zinc-800 text-lg mb-4 leading-relaxed">
                    Did you know? The average conversion rate through websites is 2.35% according to a study. So, irrespective of the type of industry that you are a part of, the average conversion rate is 2.35%. So, for every 1000 visitors, the average conversion numbers that you can expect is between 2 and 3. This is completely normal and it is a sign of a normal website. But, there is no denying that being alright is not enough in terms of performance, we have to be good. To reach that target, let’s go through some of the best sales strategies for better conversions.
                </p>
                <h2 id="3" class="text-xl xl:text-3xl text-black font-bold leading-normal xl:leading-tight mt-10 mb-4">Add strong CTAs</h2>
                <p class="text-zinc-800 text-lg mb-4 leading-relaxed">
                    Did you know? The average conversion rate through websites is 2.35% according to a study. So, irrespective of the type of industry that you are a part of, the average conversion rate is 2.35%. So, for every 1000 visitors, the average conversion numbers that you can expect is between 2 and 3. This is completely normal and it is a sign of a normal website. But, there is no denying that being alright is not enough in terms of performance, we have to be good. To reach that target, let’s go through some of the best sales strategies for better conversions.
                </p>
            </div>
        </div>
    )
}

export default BlogPostContent





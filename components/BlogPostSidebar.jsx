import React from 'react'
import Link from 'next/link'

const BlogPostSidebar = () => {
    return(
        <aside class="w-full md:w-1/3">
            <div class="rounded-md px-6 py-6 sticky top-[150px]">
                <p className="text-gray-200 font-light text-lg">Indice dei contenuti:</p>
                <div class="flex flex-col gap-2 pl-4 mt-4">
                    <p className="text-gray-400 font-light text-sm hover:text-gray-200"><Link href="#1">1. Add strong CTAs</Link></p>
                    <p className="text-gray-400 font-light text-sm hover:text-gray-200"><Link href="#2">2. Include live chat</Link></p>
                    <p className="text-gray-400 font-light text-sm hover:text-gray-200"><Link href="#3">3. Remove unnecessary forms</Link></p>
                </div>
            </div>
        </aside>
    )
}

export default BlogPostSidebar





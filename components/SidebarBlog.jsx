import Link from 'next/link'
import Image from 'next/image'
import Portrait from '../public/assets/img/me.png'


const SidebarBlog = () => {
    return(
        <aside class="w-full md:w-1/3">
            <div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-6">
                <div class="px-6">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full flex justify-center">
                            <div class="relative">
                                <img src="/assets/img/me.png" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 min-w-[150px] "/>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-28">
                        <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Nicolas Ricardi</h3>
                        <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                            <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Treviglio (BG), Italia
                        </div>
                    </div>
                    <div class="mt-6 py-6 border-t border-slate-200 text-center">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4">
                                <p class="font-light leading-relaxed text-slate-600 mb-4">
                                    Studente di Computer Science for New Media Communication e sviluppatore web freelance. Da più di due anni mi occupo di realizzare e gestire siti web per conto di imprese e professionisti.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SidebarBlog
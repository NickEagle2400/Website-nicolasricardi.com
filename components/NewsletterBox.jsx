import Image from 'next/image'
import Logo from '../public/assets/img/tuple-logo-gray-400.svg'

const NewsletterBox = (props) => {
    return (
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="w-full mx-auto xl:max-w-7xl flex flex-col md:flex-row items-center h-full bg-zinc-900 py-16 xl:rounded-lg drop-shadow-lg px-4 xl:px-16 gap-12">
                <div className="w-full xl:w-1/2 px-4 xl:px-0">
                    <h2 className="text-white mb-8">
                        <div
                            className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                            </svg>
                        </div>
                        Risorse Gratuite
                    </h2>
                    <h3 className="text-3xl xl:text-4xl font-medium xl:font-bold text-white leading-snug mb-4 mt-0">Boost your productivity. Start using our app today.</h3>
                    <p className="font-light text-gray-400 leading-normal mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum similique, iste, doloremque tempora in alias temporibus deserunt asperiores voluptas esse.</p>
                    <div className="mt-10">
                        <form action="">
                            <div className="flex flex-row">
                                <input type="email" required placeholder="La tua miglior email" className="bg-zinc-800 px-3 py-3 text-gray-200 block rounded-l-md outline-none w-3/5 border-[1px] border-white font-light" />
                                <button type="submit" className="block rounded-r-md bg-white text-black px-4 font-bold w-2/5">Invia la checklist</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 overflow-hidden rounded-md">
                    <video src="/assets/video/checklist.mp4" className="w-full" controls autoplay muted controlsList="nodownload" loop></video>
                </div>
            </div>
        </section>
    )
}

export default NewsletterBox
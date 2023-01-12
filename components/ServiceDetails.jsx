import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/img/tuple-logo-gray-400.svg'
import WebDevImage from '../public/assets/img/test.webp'
import SEOImage from '../public/assets/img/test.webp'
import CROImage from '../public/assets/img/web.webp'

const ServiceDetails = (props) => {
    return (
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="flex flex-col w-full px-4 xl:px-0 xl:max-w-screen-xl mx-auto gap-32">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full xl:w-1/2 ">
                        <h2 className="text-white mb-8">
                            <div
                                className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                </svg>
                            </div>
                            Sviluppo Siti Web
                        </h2>
                        <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold leading-snug mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <p className="text-gray-400 font-light">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt et repudiandae possimus. Et illum non unde rem repellat architecto, nisi quas accusantium magni? Ducimus sint at et magni laudantium laboriosam?
                        </p>
                        <div className="w-full flex flex-col xl:flex-row mt-4 mb-12">
                            <div className="w-full xl:w-1/2">
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="/contatti">
                                <span className="btn-secondary" href="#">
                                    Lavora con noi
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <Image src={WebDevImage} alt=""/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="w-full xl:w-1/2 ">
                        <h2 className="text-white mb-8">
                            <div
                                className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                </svg>
                            </div>
                            Search Engine Optimization
                        </h2>
                        <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold leading-snug mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <p className="text-gray-400 font-light">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt et repudiandae possimus. Et illum non unde rem repellat architecto, nisi quas accusantium magni? Ducimus sint at et magni laudantium laboriosam?
                        </p>
                        <div className="w-full flex flex-col xl:flex-row mt-4 mb-12">
                            <div className="w-full xl:w-1/2">
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(4,173,239,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(4,173,239,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(4,173,239,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(4,173,239,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(4,173,239,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(4,173,239,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="/contatti">
                                <span className="btn-secondary" href="#">
                                    Lavora con noi
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <Image src={SEOImage} alt=""/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full xl:w-1/2 ">
                        <h2 className="text-white mb-8">
                            <div
                                className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                </svg>
                            </div>
                            Conversion Rate Optimization
                        </h2>
                        <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold leading-snug mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <p className="text-gray-400 font-light">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt et repudiandae possimus. Et illum non unde rem repellat architecto, nisi quas accusantium magni? Ducimus sint at et magni laudantium laboriosam?
                        </p>
                        <div className="w-full flex flex-col xl:flex-row mt-4 mb-12">
                            <div className="w-full xl:w-1/2">
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-500">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="/contatti">
                                <span className="btn-secondary" href="#">
                                    Lavora con noi
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <Image src={CROImage} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetails
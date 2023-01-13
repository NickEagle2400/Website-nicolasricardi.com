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
                            <div className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </div>
                            Sviluppo Siti Web
                        </h2>
                        <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold xl:leading-tight mb-4">Creazione di siti web personalizzati ad alte prestazioni.</h3>
                        <p className="text-gray-400 font-light">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt et repudiandae possimus. Et illum non unde rem repellat architecto, nisi quas accusantium magni? Ducimus sint at et magni laudantium laboriosam?
                        </p>
                        <div className="w-full flex flex-col xl:flex-row mt-4 mb-12">
                            <div className="w-full xl:w-1/2">
                                <div className="my-4">
                                    <p className="text-gray-400 font-light">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-400 font-light">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Completamente Personalizzato
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-400 font-light">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Altamente Performante
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="/contatti">
                                <span className="btn-secondary" href="/sviluppo-sito-web">
                                    Scopri il mio servizio di creazione siti web
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
                            <div className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>

                            </div>
                            Search Engine Optimization
                        </h2>
                        <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold xl:leading-tight mb-4">Attrai sul tuo sito web utenti interessati ai tuoi prodotti o servizi.</h3>
                        <p className="text-gray-400 font-light">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt et repudiandae possimus. Et illum non unde rem repellat architecto, nisi quas accusantium magni? Ducimus sint at et magni laudantium laboriosam?
                        </p>
                        <div className="w-full flex flex-col xl:flex-row mt-4 mb-12">
                            <div className="w-full xl:w-1/2">
                                <div className="my-4">
                                    <p className="text-gray-400 font-light">
                                        <i className="fa-solid fa-check bg-[rgb(4,173,239,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-400 font-light">
                                        <i className="fa-solid fa-check bg-[rgb(4,173,239,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-400 font-light">
                                        <i className="fa-solid fa-check bg-[rgb(4,173,239,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="/contatti">
                                <span className="btn-secondary" href="/ottimizzazione-seo">
                                    Scopri il mio servizio di ottimizzazione SEO
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
                            <div className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                </svg>

                            </div>
                            Conversion Rate Optimization
                        </h2>
                        <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold xl:leading-tight mb-4">Implementa strategie per convertire sempre più visitatori in potenziali clienti.</h3>
                        <p className="text-gray-400 font-light">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt et repudiandae possimus. Et illum non unde rem repellat architecto, nisi quas accusantium magni? Ducimus sint at et magni laudantium laboriosam?
                        </p>
                        <div className="w-full flex flex-col xl:flex-row mt-4 mb-12">
                            <div className="w-full xl:w-1/2">
                                <div className="my-4">
                                    <p className="text-gray-400 font-light">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-400 font-light">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-400 font-light">
                                        <i className="fa-solid fa-check bg-[rgb(236,0,140,1)] p-2 rounded-full text-white mr-1"></i> Sito Web Responsive
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="/contatti">
                                <span className="btn-secondary" href="/ottimizzazione-conversion-rate">
                                    Scopri come posso aumentare le conversioni del tuo sito
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
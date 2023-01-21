import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/img/tuple-logo-gray-400.svg'
import WebDevImage from '../public/assets/img/test.webp'
import SEOImage from '../public/assets/img/CWV.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ServiceDetails = (props) => {
    return (
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="flex flex-col w-full px-4 xl:px-0 xl:max-w-screen-xl mx-auto gap-20">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full xl:w-1/2 ">
                        <h2 className="text-white mb-8">
                            <div className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </div>
                            NEXT.js + Hygraph CMS
                        </h2>
                        <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold xl:leading-tight mb-4">Tecnologie di ultima generazione al servizio della tua attività.</h3>
                        <p className="text-gray-400 font-light">
                            Grazie all'utilizzo di NEXT.js sono in grado di garantirti al 100% dei prodotti altamente performanti e adatti a business di qualsiasi dimensione, dal libero professionista che opera in un territorio ben definito, fino alla Company che opera a livello internazionale.
                        </p>
                        <p className="text-gray-400 font-light mt-4">
                            Con Hygraph CMS potrai gestire tutti i contenuti del tuo sito web in autonomia da un CMS con un'interfaccia ancor più semplice e intuitiva di quella di Wordpress.
                        </p>
                        <div className="mt-8">
                            <Link href="/creazione-sito-web" className="text-white font-medium block mt-8 group">Voglio saperne di più
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:rotate-45">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <Image src={WebDevImage} alt="Creazione di siti web - Nicolas Ricardi"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="w-full xl:w-1/2 ">
                        <h2 className="text-white mb-8">
                            <div className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>

                            </div>
                            Siti Web SEO-Friendly
                        </h2>
                        <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold xl:leading-tight mb-4">Core Web Vitals del tuo sito web ottimizzate seguendo le linee guida di Google.</h3>
                        <p className="text-gray-400 font-light">
                            Aumenta l'usabilità del tuo sito web ottimizzanto i tempi di caricamento delle pagine e dei contenuti, così da offrire un'esperienza unica ai tuoi utenti. Inoltre ciò permetterà a Google di valutare positivamente il tuo sito e ti permetterà di comparire più in alto nei risulta di ricerca.
                        </p>
                        <div className="w-full flex flex-col xl:flex-row mt-4 mb-12">
                            <div className="w-full xl:w-2/3">
                                <div className="my-4 flex flex-row items-center">
                                    <div className="flex items-center justify-center">
                                        <span className="bg-white bg-opacity-30 rounded-full block w-8 h-8 relative ">
                                            <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm"/>
                                        </span>
                                    </div>
                                    <div className="w-full ml-3">
                                        <p className="text-gray-400 font-light">Prestazioni di gran lunga superiori alla media</p>
                                    </div>
                                </div>
                                <div className="my-4 flex flex-row items-center">
                                    <div className="flex items-center justify-center">
                                        <span className="bg-white bg-opacity-30 rounded-full block w-8 h-8 relative ">
                                            <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm"/>
                                        </span>
                                    </div>
                                    <div className="w-full ml-3">
                                        <p className="text-gray-400 font-light">Implementazione delle Best-Practice SEO On-Page</p>
                                    </div>
                                </div>
                                <div className="my-4 flex flex-row items-center">
                                    <div className="flex items-center justify-center">
                                        <span className="bg-white bg-opacity-30 rounded-full block w-8 h-8 relative ">
                                            <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm"/>
                                        </span>
                                    </div>
                                    <div className="w-full ml-3">
                                        <p className="text-gray-400 font-light">Rispetto dei Requisiti di Accessibilità del W3C 3.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="/creazione-sito-web" className="text-white font-medium block mt-8 group">Voglio un audit SEO del mio sito web
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:rotate-45">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <Image src={SEOImage} alt="Dashboard di Vercel in riferimento alle prestazioni del sito www.nicolasricardi.com"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetails
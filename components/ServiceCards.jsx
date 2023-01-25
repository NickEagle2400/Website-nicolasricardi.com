import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ServiceCards = (props) => {
    return (
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="w-full px-4 mx-auto xl:px-0 xl:max-w-7xl">
                <div className="w-full flex flex-col md:flex-row gap-12 md:gap-6 xl:gap-12">
                    <div className="bg-zinc-900 rounded-md w-full md:w-1/3 xl:w-full p-10">
                        <h2 className="text-lg text-white font-bold mb-4">Roadmapping</h2>
                        <h3 className="text-white text-2xl">Pianifica.</h3>
                        <p className="text-gray-400 mt-2 font-light">Definisci un architettura orientata alla conversione che possa permetterti di raggiungere i tuoi KPI aziendali.</p>
                        <div className="flex py-3 gap-4 items-center mt-8">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Definizione dei KPI aziendali</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center border-b-[1px] border-t-[1px] border-[rgb(255,255,255,0.2)]">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Architettura dell'informazione</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Customer Journey</p>
                            </div>
                        </div>
                        <Link href="/roadmapping" className="text-white font-medium block mt-8 group">Definiamo la strategia
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:rotate-45">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                    <div className="bg-zinc-900 rounded-md w-full md:w-1/3 xl:w-full p-10">
                        <h2 className="text-lg text-white mb-4 font-bold">Creazione Sito Web</h2>
                        <h3 className="text-white text-2xl">Implementa.</h3>
                        <p className="text-gray-400 font-light mt-2">Non limitarti a costruire un sito web. Costruisci un sistema che generi conversioni e cresca con te.</p>
                        <div className="flex py-3 gap-4 items-center mt-8">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">UI / UX Design</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center border-b-[1px] border-t-[1px] border-[rgb(255,255,255,0.2)]">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Implementazione</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Integrazione 3rd-party API</p>
                            </div>
                        </div>
                        <Link href="/creazione-sito-web" className="text-white font-medium block mt-8 group">Realizziamo il nuovo sito web
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:rotate-45">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                    <div className="bg-zinc-900 rounded-md w-full md:w-1/3 xl:w-full p-10">
                        <h2 className="text-lg text-white font-bold mb-4">Sicurezza & Manutenzione</h2>
                        <h3 className="text-white text-2xl">Proteggi.</h3>
                        <p className="text-gray-400 mt-2 font-light">Proteggi il tuo sito Web contro attacchi malware, mantieni al top le prestazioni e supporta le integrazioni di terze parti.</p>
                        <div className="flex py-3 gap-4 items-center mt-8">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Protezione Malware & Backup</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center border-b-[1px] border-t-[1px] border-[rgb(255,255,255,0.2)]">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Prestazioni ottimizzate</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Deploy automatico</p>
                            </div>
                        </div>
                        <Link href="/manutenzione-sicurezza" className="text-white font-medium block mt-8 group">Basta notti insonni
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:rotate-45">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        )
    }

export default ServiceCards
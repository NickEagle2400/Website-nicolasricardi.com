import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCards = (props) => {
    return (
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="w-full px-4 mx-auto xl:px-0 xl:max-w-7xl">
                <div className="w-full flex flex-col md:flex-row gap-12 md:gap-6 xl:gap-12">
                    <div className="bg-zinc-900 rounded-md w-full md:w-1/3 xl:w-full p-10">
                        <h2 className="text-lg text-white mb-4 font-bold">Sviluppo Siti Web</h2>
                        <h3 className="text-white text-2xl">Ispira i visitatori.</h3>
                        <p className="text-gray-400 font-light mt-2">Sorprendili con un restyling o con un sito completamente nuovo.</p>
                        <div className="flex py-3 gap-4 items-center mt-8">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Analisi</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center border-b-[1px] border-t-[1px] border-[rgb(255,255,255,0.2)]">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Design</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Sviluppo</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 rounded-md w-full md:w-1/3 xl:w-full p-10">
                        <h2 className="text-lg text-white font-bold mb-4">SEO</h2>
                        <h3 className="text-white text-2xl">Fatti trovare.</h3>
                        <p className="text-gray-400 mt-2 font-light">Perché un sito web senza visitatori è solo una spesa e non un investimento.</p>
                        <div className="flex py-3 gap-4 items-center mt-8">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Audit SEO</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center border-b-[1px] border-t-[1px] border-[rgb(255,255,255,0.2)]">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Ottimizzazione SEO Tecnica </p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Strategia Contenuti</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 rounded-md w-full md:w-1/3 xl:w-full p-10">
                        <h2 className="text-lg text-white font-bold mb-4">Conversion Rate Optimization</h2>
                        <h3 className="text-white text-2xl">Migliora le performance.</h3>
                        <p className="text-gray-400 mt-2 font-light">Analizza e ottimizza il tasso di conversione del tuo sito web </p>
                        <div className="flex py-3 gap-4 items-center mt-8">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Monitoraggio</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center border-b-[1px] border-t-[1px] border-[rgb(255,255,255,0.2)]">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">Analisi e Controllo</p>
                            </div>
                        </div>
                        <div className="flex py-3 gap-4 items-center">
                            <div className="flex items-center justify-center">
                                <span className="bg-white rounded-full block w-6 h-6 relative ">
                                    <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm"/>
                                </span>
                            </div>
                            <div className="w-full">
                                <p className="text-white font-medium">A/B Testing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }

export default ServiceCards
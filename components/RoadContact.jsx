import Link from "next/link";


const RoadContact = () => {

    return (
        <section className="relative pt-6 pb-6 xl:py-20 bg-black flex items-center justify-center">
            <div className="w-full px-4 mx-auto flex flex-col md:flex-row xl:px-0 xl:max-w-7xl xl:gap-12 items-center gap-16">
                <div className="w-full flex flex-col lg:flex-row gap-6 justify-center">
                    <div className="w-full lg:w-1/2 flex items-center justify-center ">
                        <div className="bg-black border-[1px] rounded w-full lg:w-2/3">
                            <div className="border-b-[1px] border-white py-3 px-6">
                                <h2 className="font-medium capitalize text-white">Roadmapping</h2>
                            </div>
                            <div className="border-b-[1px] border-white py-4 px-6">
                                <h2 className="text-5xl text-white"><span className="text-base font-light text-gray-400">Roadmap completa per </span> &nbsp;397€<span className="text-gray-400">*</span></h2>
                                <p className="font-light text-gray-400 text-sm mt-4">
                                    *Il 50% del costo è deducibile dalla prima fattura di sviluppo.
                                </p>
                            </div>
                            <div className="border-b-[1px] border-white py-4 px-6">
                                <h2 className="text-gray-300 mb-3">Roadmapping e pianificazione</h2>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        5h Workshop in videochiamata / presenza
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Definizione degli obiettivi di business e dei KPI
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Analisi dei competitor
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Architettura dell'informazione e Sitemap
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-6">
                                    <Link href="https://buy.stripe.com/5kA5nXgxa7rpgCY8wB" target="_blank" className="btn-secondary w-full text-center group">
                                        Ordina adesso
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:rotate-45">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1">
                                    <p className="font-light text-gray-400 text-sm">
                                        Sei il proprietario della strategia realizzata durante il roadmapping e non ci sono obblighi di lavoro futuri.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative z-20 flex items-start justify-center">
                        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words w-full shadow-lg rounded-md p-4">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h2 className="text-white mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                            </svg>
                                        </div>
                                        Acquista il servizio di Roadmapping
                                    </h2>
                                    <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold xl:leading-tight mb-4">Il segreto di un sito web di successo è la strategia su cui viene costruito</h3>
                                    <p className="text-gray-400 font-light">Lorem ipsum</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

    export default RoadContact
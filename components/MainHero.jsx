import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Portrait from '../public/assets/img/me.png'


const MainHero = () => {
    return(
        <section className="relative pt-12 pb-6 xl:py-20 xl:pb-12 bg-black flex items-center justify-center">
            <div className="w-full px-4 mx-auto flex flex-col md:flex-row xl:px-0 xl:max-w-7xl xl:gap-12 items-center gap-16">
                <div className="w-full xl:w-1/2 flex flex-col gap-6">
                    <h1 className="text-3xl text-white font-bold w-full mx-auto relative leading-tight xl:text-6xl">
                        Realizzo esperienze web su misura per Freelance e Imprese
                    </h1>
                    <p className="relative leading-relaxed font-light text-gray-300">
                        Aiuto imprenditori e liberi professionisti a convertire gli utenti del loro sito in potenziali clienti grazie ad un pacchetto "chiavi in mano" completamente personalizzato per le necessità del loro business.
                    </p>
                    <div className="my-8 flex xl:flex-row flex-col items-start xl:items-center gap-12">
                        <a className="btn-secondary" href="#">
                            Iniziamo a lavorare insieme
                        </a>
                        <a className="btn-tertiary text-center hidden xl:inline" href="#">
                            Come posso aiutare la tua attività
                        </a>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 relative z-20 flex items-center justify-center">
                    <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-6">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full flex justify-center">
                                    <div className="relative">
                                        <div className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 min-w-[150px] overflow-hidden ">
                                            <Image src={Portrait} alt="Nicolas Ricardi" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full text-center mt-20">
                                    <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                        <div className="p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                            <span className="text-sm text-slate-500 font-light">Foto</span>
                                        </div>
                                        <div className="p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                                            <span className="text-sm text-slate-500 font-light">Followers</span>
                                        </div>
                                        <div className="p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                                            <span className="text-sm text-slate-500 font-light">Following</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                <h2 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Nicolas Ricardi</h2>
                                <div className="text-xs mt-0 mb-2 text-slate-500 uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-slate-500"></i>Treviglio (BG), Italia
                                </div>
                            </div>
                            <div className="mt-6 py-6 border-t border-slate-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4">
                                        <p className="font-light leading-relaxed text-slate-600 mb-4">
                                            Studente di Computer Science for New Media Communication e sviluppatore web freelance. Da più di due anni mi occupo di realizzare e gestire siti web per conto di imprese e professionisti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainHero
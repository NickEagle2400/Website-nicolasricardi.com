import Link from "next/link";
import { useState } from "react";



const MaintenancePricing = () => {

    const [isMonthlyPricing, setPricing] = useState(true);
    const handleClick = () => {
        setPricing(!isMonthlyPricing);
    }

    const data={
        basic:{
            monthly:{
                pricing: '97',
                url: '',
            },
            yearly:{
                pricing: '1097',
                url: '',
            }
        },
        pro:{
            monthly:{
                pricing: '147',
                url: '',
            },
            yearly:{
                pricing: '1617',
                url: '',
            }
        },
        ultra:{
            monthly:{
                pricing: '297',
                url: '',
            },
            yearly:{
                pricing: '3207',
                url: '',
            }
        }
    }



    return (
        <section className="relative pt-6 pb-6 xl:py-20 bg-black flex items-center justify-center">
            <div className="w-full px-4 mx-auto flex flex-col xl:px-0 xl:max-w-7xl xl:gap-12 gap-16">
                <div className="w-full lg:w-3/5">
                    <h2 className="text-white mb-6">
                        <div className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                            </svg>
                        </div>
                        Prezzi
                    </h2>
                    <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold xl:leading-tight mb-4">Scegli il piano di manutenzione e sicurezza più adatto alle tue esigenze.</h3>
                    <p className="text-white font-ligh"><span onClick={handleClick} className="cursor-pointer">Vedi fatturazione {isMonthlyPricing? 'annuale':'mensile'}</span></p>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-12 justify-center items-start">
                    <div className="w-full flex items-center justify-center ">
                        <div className="bg-black border-[1px] rounded w-full">
                            <div className="border-b-[1px] border-white py-3 px-6">
                                <h2 className="font-medium capitalize text-white">Basic</h2>
                            </div>
                            <div className="border-b-[1px] border-white py-4 px-6">
                                <h2 className="text-5xl text-white">{isMonthlyPricing? data.basic.monthly.pricing : data.basic.yearly.pricing }€<span className="text-base font-light text-gray-400">/ {isMonthlyPricing?'mese':'anno'}</span></h2>
                                <p className="font-light text-gray-400 mt-2 text-sm">Risparmia il 5% acquistando il piano annuale.</p>
                            </div>
                            <div className="border-b-[1px] border-white py-4 px-6">
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Gestione DNS
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Backup mensile
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Monitoraggio Uptime
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Aggiornamento del server
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Privacy e Cookie Policy
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-6">
                                    <Link href="https://buy.stripe.com/4gwdUt0yc4fddqM9AC" target="_blank" className="btn-secondary w-full text-center group">
                                        Ordina adesso
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:rotate-45">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1">
                                    <p className="font-light text-gray-400 text-sm">
                                        Rimani al sicuro e online con il piano Basic che copre gli elementi essenziali della manutenzione del sito web.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center ">
                        <div className="bg-black border-[1px] rounded border-green-500 w-full relative">
                            <span className="absolute right-4 top-2 bg-green-500 text-white px-2 py-1 font-bold rounded-sm">Popolare</span>
                            <div className="border-b-[1px] border-green-500 py-3 px-6">
                                <h2 className="font-medium capitalize text-white">Pro</h2>
                            </div>
                            <div className="border-b-[1px] border-green-500 py-4 px-6">
                                <h2 className="text-5xl text-white">{isMonthlyPricing? data.pro.monthly.pricing : data.pro.yearly.pricing }€<span className="text-base font-light text-gray-400">/ {isMonthlyPricing?'mese':'anno'}</span></h2>
                                <p className="font-light text-gray-400 mt-2 text-sm">Risparmia l'8% acquistando il piano annuale.</p>
                            </div>
                            <div className="border-b-[1px] border-green-500 py-4 px-6">
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Piano Basic incluso
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Backup settimanale
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        CDN per le immagini
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Ottimizzazione delle immagini illimitata
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        5% sconto sugli interventi
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-6">
                                    <Link href="https://buy.stripe.com/8wMaIh6WAaDB0E0eUX" target="_blank" className="btn-secondary w-full text-center group">
                                        Ordina adesso
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:rotate-45">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1">
                                    <p className="font-light text-gray-400 text-sm">
                                        Migliora le tue prestazioni e aumenta la tua velocità con funzioni di ottimizzazione aggiuntive.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center ">
                        <div className="bg-black border-[1px] rounded w-full">
                            <div className="border-b-[1px] border-white py-3 px-6">
                                <h2 className="font-medium capitalize text-white">Ultra</h2>
                            </div>
                            <div className="border-b-[1px] border-white py-4 px-6">
                                <h2 className="text-5xl text-white">{isMonthlyPricing? data.ultra.monthly.pricing : data.ultra.yearly.pricing }€<span className="text-base font-light text-gray-400">/ {isMonthlyPricing?'mese':'anno'}</span></h2>
                                <p className="font-light text-gray-400 mt-2 text-sm">Risparmia il 10% acquistando il piano annuale.</p>
                            </div>
                            <div className="border-b-[1px] border-white py-4 px-6">
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Piano Pro incluso
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Supporto prioritario
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Rapporto Search Console
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Rapporto Google Analytics
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Rapporto SEO
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        CDN dedicata
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        10% di sconto sugli interventi
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-6">
                                    <Link href="https://buy.stripe.com/8wM8A93Ko6nl3Qc6os" target="_blank" className="btn-secondary w-full text-center group">
                                        Ordina adesso
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:rotate-45">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1">
                                    <p className="font-light text-gray-400 text-sm">
                                        Fai salire alle stelle le prestazioni del tuo sito web con tutte le funzionalità di cui hai bisogno per crescere e rimanere al top.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

    export default MaintenancePricing
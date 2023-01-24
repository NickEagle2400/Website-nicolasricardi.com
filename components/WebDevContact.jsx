import Link from "next/link";

const WebDevContact = () => {

    return (
        <section className="relative pt-6 pb-6 xl:py-20 bg-black flex items-center justify-center">
            <div className="w-full px-4 mx-auto flex flex-col md:flex-row xl:px-0 xl:max-w-7xl xl:gap-12 items-center gap-16">
                <div className="w-full flex flex-col lg:flex-row gap-6 justify-center">
                    <div className="w-full lg:w-1/2 flex items-center justify-center ">
                        <div className="bg-black border-[1px] rounded w-full lg:w-2/3">
                            <div className="border-b-[1px] border-white py-3 px-6">
                                <h2 className="font-medium capitalize text-white">Starter Plan</h2>
                            </div>
                            <div className="border-b-[1px] border-white py-4 px-6">
                                <h2 className="text-5xl text-white"><span className="text-base font-light text-gray-400">A partire da</span> 2000€</h2>
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
                            </div>
                            <div className="border-b-[1px] border-white py-4 px-6">
                                <h2 className="text-gray-300 mb-3">Implementazione</h2>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Design
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Sviluppo Frontend & Backend
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Integrazione 3rd Party API
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Ottimizzazione Core Web Vitals
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        GDPR Compliance
                                    </p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-white py-4 px-6">
                                <h2 className="text-gray-300 mb-3">Servizi opzionali</h2>
                                <div className="flex flex-row gap-2 items-center my-1 font-light text-gray-400">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>
                                        Hosting & Manutenzione
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative z-20 flex items-center justify-center">
                        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words w-full shadow-lg rounded-md p-4">
                            <form className="flex flex-col gap-6">
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
                                        Invia la tua richiesta
                                    </h2>
                                    <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold xl:leading-tight mb-4">Il primo passo verso il tuo nuovo sito web</h3>
                                    <p className="text-gray-400 font-light">Ottieni un sistema che aumenta le conversioni e la produttività, costruito pensando a integrazioni e scalabilità. Aumenta le tue entrate e continua a crescere!</p>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <input type="text" name="" placeholder="Nome e cognome*" className="w-full lg:w-1/2 px-4 py-2 bg-zinc-900 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required />
                                    <input type="text" name="" placeholder="Nome azienda*" className="w-full lg:w-1/2 px-4 py-2 bg-zinc-900 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required />
                                </div>
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <input type="email" name="" placeholder="La tua miglior email*" className="w-full lg:w-1/2 px-4 py-2 bg-zinc-900 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required />
                                    <input type="phone" name="" placeholder="Numero di cellulare*" className="w-full lg:w-1/2 px-4 py-2 bg-zinc-900 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required />
                                </div>
                                <div className="">
                                    <p className="text-gray-400 font-light accent-blue-500 text-sm"><input type="checkbox" name="privacy" required /> Ho letto l'informativa sulla Privacy Policy e acconsento al trattamento dei dati personali ai sensi del Regolamento Europeo n. 2016/679.</p>
                                    <p className="text-gray-400 font-light accent-blue-500 mt-6 text-sm"><input type="checkbox" name="privacy" required /> Desidero iscrivermi alla newsletter e ricevere sul mio indirizzo email comunicazioni a finalità di marketing.</p>
                                </div>
                                <div className="">
                                    <button type="submit" className="w-full bg-white py-3 rounded-sm font-medium transition-transform duration-200 hover:scale-105">Si, invia la mia richiesta</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

    export default WebDevContact
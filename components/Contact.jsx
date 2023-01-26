
const Contact = (props) => {
    return (
        <section className="relative pt-16 pb-20 xl:py-20 bg-black flex items-center justify-center">
            <div className="w-full px-4 mx-auto flex flex-col md:flex-row xl:px-0 xl:max-w-7xl xl:gap-8 items-start gap-10">
                <div className="w-full xl:w-1/3 flex flex-col gap-6 md:gap-6">
                    <h1 className="text-white">
                        <span
                            className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                            </svg>
                        </span>
                        Consulenza gratuitia
                    </h1>
                    <h2 className="text-3xl text-white font-bold w-full mx-auto relative leading-tight xl:text-6xl">
                        Richiedi una consulenza gratuita
                    </h2>
                    <p className="relative leading-relaxed font-light text-gray-300">
                        Hai bisogno di maggiori informazioni sui miei servizi o vuoi sapere come potrebbero aiutarti a migliorare la tua attività?
                    </p>
                    <p className="relative leading-relaxed font-light text-gray-300">
                        Richiedi una <strong>consulenza gratuita di 30 minuti</strong> in cui risponderò a tutte le tue domande.
                    </p>
                </div>
                <div className="w-full xl:w-2/3 relative z-20 flex items-center justify-center">
                    <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words w-full shadow-lg rounded-md">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
                                <input type="text" name="" placeholder="Nome e cognome" className="w-full px-4 py-2 bg-zinc-900 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required />
                                <input type="email" name="" placeholder="La tua miglior email" className="w-full px-4 py-2 bg-zinc-900 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-400 font-light">Sei interessat@ a:</label>
                                <select className="w-full px-4 py-2 bg-zinc-900 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required>
                                    <option value="" className="">Sviluppo Sito Web</option>
                                    <option value="">Roadmapping</option>
                                    <option value="">Manutenzione & Sicurezza</option>
                                    <option value="">Audit Core Web Vitals</option>
                                    <option value="">Sviluppo Landing Page</option>
                                </select>
                                <textarea name="" placeholder="Quali sono le principali problematiche che riscontri con il tuo sito web?" className="w-full mt-4 px-4 py-2 bg-zinc-900 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600 min-h-[100px]" required />
                            </div>
                            <div className="">
                                <p className="text-gray-400 font-light accent-blue-500"><input type="checkbox" name="privacy" required /> Ho letto l'informativa sulla Privacy Policy e acconsento al trattamento dei dati personali ai sensi del Regolamento Europeo n. 2016/679.</p>
                            </div>
                            <div className="">
                                <button type="submit" className="w-full bg-white py-3 rounded-sm font-medium transition-transform duration-200 hover:scale-105">Si, invia la mia richiesta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact


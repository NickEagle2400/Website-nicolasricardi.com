
const Contact = (props) => {
    return (
        <section class="relative pt-6 pb-6 xl:py-20 bg-black flex items-center justify-center">
            <div class="w-full px-4 mx-auto flex flex-col md:flex-row xl:px-0 xl:max-w-7xl xl:gap-12 items-center gap-16">
                <div class="w-full xl:w-1/2 flex flex-col gap-6">
                    <h1 class="text-3xl text-white font-bold w-full mx-auto relative leading-tight xl:text-6xl">
                        Richiedi una consulenza gratuita
                    </h1>
                    <p class="relative leading-relaxed font-light text-gray-300">
                        Hai bisogno di maggiori informazioni sui miei servizi o vuoi sapere come potrebbero aiutarti a migliorare la tua attività?
                    </p>
                    <p class="relative leading-relaxed font-light text-gray-300">
                        Richiedi una <strong>consulenza gratuita di 30 minuti</strong> in cui risponderò a tutte le tue domande.
                    </p>
                </div>
                <div class="w-full xl:w-1/2 relative z-20 flex items-center justify-center">
                    <div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-zinc-900 w-full shadow-lg rounded-md p-6 md:p-12">
                        <form class="flex flex-col gap-6">
                            <div>
                                <h2 class="text-white mb-6">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-black">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                        </svg>
                                    </div>
                                    Inviami un messaggio
                                </h2>
                                <p class="text-gray-400 font-light">Compila questo modulo per inviarmi una richiesta.<br />Solitamente rispondo entro 24 ore lavorative.</p>
                            </div>
                            <div class="flex flex-col gap-2">
                                <input type="text" name="" placeholder="Nome e cognome" class="w-full px-4 py-2 bg-zinc-800 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required />
                                <input type="email" name="" placeholder="La tua miglior email" class="w-full px-4 py-2 bg-zinc-800 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="text-gray-400 font-light">Sei interessat@ a:</label>
                                <select class="w-full px-4 py-2 bg-zinc-800 rounded-sm font-light outline-none border-[2px] border-transparent text-gray-300 focus:border-zinc-600" required>
                                    <option value="" selected hidden disabled>Seleziona un servizio</option>
                                    <option value="" class="">Sviluppo Sito Web</option>
                                    <option value="">Sviluppo Landing Page</option>
                                    <option value="">SEO Audit</option>
                                    <option value="">Ottimizzazione SEO</option>
                                    <option value="">Ottimizzazione Tasso di Conversione (CRO)</option>
                                </select>
                            </div>
                            <div class="">
                                <p class="text-gray-400 font-light accent-blue-500"><input type="checkbox" name="privacy" required /> Ho letto l'informativa sulla Privacy Policy e acconsento al trattamento dei dati personali ai sensi del Regolamento Europeo n. 2016/679.</p>
                            </div>
                            <div class="">
                                <button type="submit" class="w-full bg-white py-3 rounded-sm font-medium transition-transform duration-200 hover:scale-105">Si, invia la mia richiesta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact


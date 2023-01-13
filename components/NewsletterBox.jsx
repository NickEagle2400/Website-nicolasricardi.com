const NewsletterBox = (props) => {
    return (
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="w-full mx-auto xl:max-w-7xl flex flex-col md:flex-row items-center h-full bg-zinc-900 py-16 xl:rounded-lg drop-shadow-lg px-4 xl:px-16 gap-12">
                <div className="w-full xl:w-1/2 px-4 xl:px-0">
                    <h2 className="text-white mb-8">
                        <div className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </div>
                        Risorse Gratuite
                    </h2>
                    <h3 className="text-3xl xl:text-4xl font-medium xl:font-bold text-white xl:leading-tight mb-4 mt-0">Scopri se la tua homepage converte i visitatori in prospect con questa checklist gratuita.</h3>
                    <p className="font-light text-gray-400 leading-normal mb-4">In questa checklist troverai <strong className="text-gray-300 font-medium">50+ tips & tricks</strong> per migliorare ogni possibile aspetto della tua homepage.</p>
                    <p className="font-light text-gray-400 leading-normal mb-4">Inserisci qui il tuo indirizzo email per ricevere subito il link per accedere alla checklist ed iniziare a generare nuovi clienti.</p>
                    <div className="mt-10">
                        <form action="">
                            <div className="flex flex-row">
                                <input type="email" required placeholder="La tua miglior email" className="bg-zinc-800 px-3 py-3 text-gray-200 block rounded-l-md outline-none w-3/5 border-[1px] border-white font-light" />
                                <button type="submit" className="block rounded-r-md bg-white text-black px-4 font-bold w-2/5">Invia la checklist</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 overflow-hidden rounded-md">
                    <video src="/assets/video/checklist.mp4" className="w-full cursor-pointer" controls controlsList="nodownload"></video>
                </div>
            </div>
        </section>
    )
}

export default NewsletterBox
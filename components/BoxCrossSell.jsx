const BoxCrossSell = () =>{

    return(
        <section className="relative py-12 xl:py-18 bg-black">
            <div className="w-full mx-auto xl:max-w-7xl flex flex-col md:flex-row items-center h-full bg-zinc-900 py-16 xl:rounded-lg drop-shadow-lg px-4 xl:px-16 gap-12">
                <div className="w-full xl:w-1/2 xl:px-0">
                    <h2 className="text-white mb-8">
                        <div
                            className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                            </svg>
                        </div>
                        Ti potrebbero interessare anche:
                    </h2>
                    <h3 className="text-3xl xl:text-4xl font-medium xl:font-bold text-white leading-snug mb-4 mt-0">Servizi aggiuntivi da abbinare alla creazione del tuo sito web</h3>
                    <p className="font-light text-gray-400 leading-normal mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum similique, iste, doloremque tempora in alias temporibus deserunt asperiores voluptas esse.</p>
                </div>
                <div className="w-full xl:w-1/2 rounded-md flex flex-row items-center justify-center gap-4 md:gap-8 overflow-visible">
                    <a className="flex flex-col items-center justify-center gap-2 border-[1px] border-white p-8 w-full h-[200px] transition-all duration-300 rounded-lg hover:bg-zinc-700 hover:scale-110" href="#">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                        </div>
                        <h4 className="text-gray-300 font-medium text-center">Strategia SEO</h4>
                    </a>
                    <a className="flex flex-col items-center justify-center gap-2 border-[1px] border-white p-8 w-full h-[200px] transition-all duration-300 rounded-lg hover:bg-zinc-700 hover:scale-110" href="#">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                            </svg>
                        </div>
                        <h4 className="text-gray-300 font-medium text-center">Conversion Rate Optimization</h4>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default BoxCrossSell
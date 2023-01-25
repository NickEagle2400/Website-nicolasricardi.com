import React from 'react'
import Link from 'next/link'

const BoxCallToAction = () => {
    return(
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="w-full xl:max-w-7xl mx-auto justify-between items-center h-full bg-white py-16 xl:rounded-lg drop-shadow-lg">
                <div className="text-center w-full xl:w-3/5 mx-auto px-4 xl:px-0">
                    <h2 className="text-3xl xl:text-4xl font-medium xl:font-bold text-black leading-snug mb-4 mt-0">Il tuo sito ti fa perdere soldi?<br/>Prenota una consulenza gratuita.</h2>
                    <p className="font-light text-zinc-800 leading-normal mb-4">In questa videocall di 30 minuti analizzeremo le pagine principali del tuo sito web da cima a fondo e capiremo insieme come aumentare il numero di lead provenienti dal web.</p>
                    <div className="mt-10">
                        <Link href="/roadmapping" className="btn-primary">Si, voglio iniziare ad ottenere clienti dal mio sito web</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoxCallToAction





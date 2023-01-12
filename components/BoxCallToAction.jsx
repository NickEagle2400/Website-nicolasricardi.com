import React from 'react'
import Link from 'next/link'

const BoxCallToAction = () => {
    return(
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="w-full xl:max-w-7xl mx-auto justify-between items-center h-full bg-white py-16 xl:rounded-lg drop-shadow-lg">
                <div className="text-center w-full xl:w-3/5 mx-auto px-4 xl:px-0">
                    <h2 className="text-3xl xl:text-4xl font-medium xl:font-bold text-black leading-snug mb-4 mt-0">Il tuo sito ti fa perdere soldi?<br/>Prenota la tua consulenza gratuita.</h2>
                    <p className="font-light text-zinc-800 leading-normal mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum similique, iste, doloremque tempora in alias temporibus deserunt asperiores voluptas esse.</p>
                    <div className="mt-10">
                        <span className="btn-primary">
                            <Link href="/">Lavora con noi</Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoxCallToAction





import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WebDevImage from '../public/assets/img/test.webp'


const BlogHero = () => {
    return(
        <section className="relative pt-12 pb-6 xl:py-20 xl:pb-0 bg-black flex items-center justify-center">
            <div className="w-full px-4 mx-auto flex flex-col xl:flex-row xl:px-0 xl:max-w-7xl xl:gap-12 items-center gap-16">
                <div className="w-full xl:w-1/2 flex flex-col gap-6">
                    <h1 className="text-3xl text-white font-bold w-full mx-auto relative leading-tight xl:text-6xl">
                        Realizzo esperienze web su misura per Freelance e Imprese
                    </h1>
                    <p className="relative leading-relaxed font-light text-gray-300">
                        Aiuto imprenditori e liberi professionisti a convertire gli utenti del loro sito in potenziali clienti grazie ad un pacchetto "chiavi in mano" completamente personalizzato per le necessità del loro business.
                    </p>
                    <div className="my-8 flex xl:flex-row flex-col items-center gap-12 w-full">
                        <form action="" className="w-full">
                            <div className="flex flex-row">
                                <input type="email" required placeholder="La tua miglior email" className="bg-zinc-800 px-3 py-3 text-gray-200 block rounded-l-md outline-none w-3/5 border-[1px] border-white font-light" />
                                <button type="submit" className="block rounded-r-md bg-white text-black px-4 font-bold w-2/5">Invia la checklist</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 relative z-20 flex items-center justify-center">
                    <Image src={WebDevImage} alt="" fill />
                </div>
            </div>
        </section>
    )
}

export default BlogHero
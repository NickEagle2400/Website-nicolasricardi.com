import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WebDevImage from '../public/assets/img/test.webp'
import NewsletterForm from './NewsletterForm'


const BlogHero = () => {
    return(
        <section className="relative pt-12 pb-6 xl:py-20 xl:pb-0 bg-black flex items-center justify-center">
            <div className="w-full px-4 mx-auto flex flex-col xl:flex-row xl:px-0 xl:max-w-7xl xl:gap-12 items-center gap-16">
                <div className="w-full xl:w-3/5 flex flex-col gap-6">
                    <h1 className="text-3xl text-white font-bold w-full mx-auto relative leading-tight xl:text-6xl">
                        Realizzo esperienze web su misura per Freelance e Imprese
                    </h1>
                    <p className="relative leading-relaxed font-light text-gray-300">
                        Aiuto imprenditori e liberi professionisti a convertire gli utenti del loro sito in potenziali clienti grazie ad un pacchetto "chiavi in mano" completamente personalizzato per le necessità del loro business.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BlogHero
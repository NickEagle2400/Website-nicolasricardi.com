import Image from 'next/image'
import { StandardLayout } from '../../layout'
import { BoxCrossSell, Hero, SeoHead } from '../../components'


const SeoServicePage = () => {
    return (
        <StandardLayout>
            <SeoHead 
                pageURL="https://wwww.nicolasricardi.com/ottimizzazione-seo"
                pageTitle="Ottimizzazione SEO Tecnica - Nicolas Ricardi"
                pageDesc="Compila il modulo per inviami un messaggio senza impegno."
                pageSocialDesc="Compila il modulo per inviami un messaggio senza impegno."
                pageKeywords="Nicolas Ricardi, contattami"
                pageCover="/assets/img/coverHome.png"
                websiteDomain="nicolasricardi.com"
            />
            <Hero 
                title="Ottimizzazione SEO"
                subtitle="RENDI TECNICAMENTE EFFICIENTE IL TUO SITO WEB"
                description="Aiuto imprenditori e liberi professionisti a convertire gli utenti del loro sito in potenziali clienti grazie ad un pacchetto di servizi completamente personalizzato per le necessità del loro business."
            />

            <section className="relative pt-12 pb-6 xl:py-16 bg-black flex items-center justify-center">
                <div className="w-full px-4 mx-auto flex flex-col md:flex-row xl:px-0 xl:max-w-7xl justify-between gap-10 md:gap-0">
                    <div className="w-full flex flex-col gap-10 md:pr-10 ">
                        <h2 className="text-white">
                            <div
                                className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                </svg>
                            </div>
                            SEO Tecnica
                        </h2>
                        <div className="w-full">
                            <p className="text-gray-400 font-light m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ut numquam? Quis ipsam possimus commodi ex cupiditate odit odio natus, repellendus esse earum expedita nulla asperiores assumenda corrupti placeat nam.</p>
                        </div>
                        <div className="bg-white w-full p-8 rounded-lg">
                            <p className="relative leading-relaxed">Audit Technical SEO:</p>
                            <p className="text-2xl font-bold mt-2">Da 300€ - IVA esente</p>
                            <p className="my-1">Scontabili in caso di intervento</p>
                            <p className="my-1 text-xs font-light">Prezzo indicativo. Per una valutazione dettagliata richiedi un preventivo.</p>
                            <div className="mt-6">
                                <a className="btn-primary">Si, voglio un audit del mio sito!</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:border-l-[1px] md:border-l-zinc-800 gap-10">
                        <div className="md:px-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">1. Audit SEO Off-Page</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Verifica prestazioni hosting</li>
                                <li className="">Verifica certificato SSL</li>
                                <li className="">Verifica HTTPS</li>
                                <li className="">Analisi delle Core Web Vitals desktop e mobile</li>
                                <li className="">Ricerca errori 404</li>
                                <li className="">Verifica redirect 3xx</li>
                                <li className="">Analisi del file Robots.txt</li>
                                <li className="">Verifica della Sitemap.xml</li>
                                <li className="">Report sui backlink del tuo sito</li>

                            </ul>
                        </div>
                        <div class="md:px-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">2. Audit SEO On-Page</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Ricerca contenuti duplicati</li>
                                <li className="">Verifica della presenza dei Meta tag</li>
                                <li className="">Verifica della presenza dei tag OpenGraph</li>
                                <li className="">Verifica dei dati strutturati</li>
                                <li className="">Verifica installazione di Google Analytics</li>
                                <li className="">Verifica installazione di Google Search Console</li>
                                <li className="">Verifica installazione del Pixel di Meta</li>
                                <li className="">Analisi del file Robots.txt</li>
                                <li className="">Ricerca dei "Dead Link"</li>
                                <li className="">Verifica attributi "rel" dei link</li>
                                <li className="">Verifica attributi "hreflang" per siti multilingua</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-10">
                        <div className="md:pl-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">4. Monitoraggio e Tools Google</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Installazione Google Analytics</li>
                                <li className="">Monitoraggio dei moduli di contatto</li>
                                <li className="">Installazione Google Search Console</li>
                                <li className="">Generazione Sitemap</li>
                                <li className="">Creazione / Ottimizzazione Google My Business</li>
                            </ul>
                        </div>
                        <div className="md:pl-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">5. GDPR</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Messa a norma dei moduli di contatto</li>
                                <li className="">Creazione e gestione Privacy e Cookie policy</li>
                                <li className="">Inserimento cookie banner</li>
                                <li className="">Inserimento gestione delle preferenze</li>
                            </ul>
                        </div>
                        <div className="bg-zinc-800 w-full p-4 rounded-lg">
                            <h3 className="bg-zinc-800 md:px-4 rounded-md text-white font-medium text-sm">SERVIZI AGGIUNTIVI SU RICHIESTA</h3>
                            <ul className="mt-4 text-gray-400 md:pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li>Sito multilingua</li>
                                <li>Newsletter</li>
                                <li>Marketing Automation</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <BoxCrossSell />

        </StandardLayout>
    )
}

export default SeoServicePage
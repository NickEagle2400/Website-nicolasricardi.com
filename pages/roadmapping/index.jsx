import Image from 'next/image'
import { StandardLayout } from '../../layout'
import { Testimonials, Faq, SeoHead, RoadServiceDetails, RoadContact } from '../../components'
import { FaqContainer } from '../../container'



const Roadmapping = () => {

    const metadata = {
        url:"https://www.nicolasricardi.com/roadmapping",
        metaTitle:"Roadmapping e Architettura Dell'Informazione Per Il Tuo Sito Web - Nicolas Ricardi Web.Dev",
        metaDescription:"Scopri come il tuo sito web può beneficiare di un attento studio dell'architettura e dell'organizzazione dell'informazione e aumentare il flusso di contatti organici per la tua attività.",
        socialTitle:"Roadmapping e Architettura Dell'Informazione Per Il Tuo Sito Web - Nicolas Ricardi Web.Dev",
        SocialDescription:"Scopri come il tuo sito web può beneficiare di un attento studio dell'architettura e dell'organizzazione dell'informazione e aumentare il flusso di contatti organici per la tua attività.",
        metaKeywords:"Roadmapping sito web, alberatura sito web, nicolas ricardi, architettura dell'informazione, architettura dell'informazione sito web, strategia sito web, sitemap sito web",
        socialImage:{
            url:"https://www.nicolasricardi.com/assets/img/coverHome.png",
        },
        domain:"nicolasricardi.com"
    }

    const faqList= [
        {
            question: 'Il roadmapping è necessario se voglio un sito web?',
            answer: 'Si. Una volta allineati i tuoi obiettivi aziendali e le potenziali soluzioni di implementazione, sarà molto più semplice sviluppare un sito Web che soddisfi completamente le tue esigenze.'
        },
        {
            question: 'Sono obbligato a commisionarti il sito al termine del roadmapping?',
            answer: 'No, puoi decidere di non continuare il resto del lavoro con me e sarai libero di utilizzare il risultato del workshop come meglio credi.'
        },
        {
            question: 'Se decido di continuare con te, il roadmapping viene detratto dal costo di sviluppo?',
            answer: 'Si, potrai avere una deduzione pari al 50% del costo del roadmapping.'
        },
        {
            question: 'Posso acquistare solo il servizio di roadmapping?',
            answer: 'Sì! Sei il proprietario della strategia che creeremo durante il Roadmapping.'
        }
    ]


    return (
        <StandardLayout>
            <SeoHead 
                pageURL={metadata.url}
                pageTitle={metadata.metaTitle}
                pageDesc={metadata.metaDescription}
                pageSocialTitle={metadata.socialTitle}
                pageSocialDesc={metadata.SocialDescription}
                pageKeywords={metadata.metaKeywords}
                pageCover={metadata.socialImage.url}
                websiteDomain={metadata.domain}
            />
            <section className="relative pt-12 pb-6 xl:py-20 xl:pb-0 bg-black flex items-center justify-center">
                <div className="w-full px-4 mx-auto flex flex-col xl:flex-row xl:px-0 xl:max-w-7xl xl:gap-12 items-center gap-16">
                    <div className="w-full xl:w-3/5 flex flex-col gap-6">
                        <h1 className="text-3xl text-white font-bold w-full mx-auto relative leading-tight xl:text-6xl">
                            Pianificazione strategica per il tuo sito web
                        </h1>
                        <p className="relative leading-relaxed font-light text-gray-300">
                            Le conversioni non sono un sottoprodotto dello sviluppo del sito web. Sono pianificati strategicamente con Roadmapping.
                        </p>
                        <p className="relative leading-relaxed font-light text-gray-300">
                            Lega i tuoi obiettivi di business all'architettura del sito web e ottieni una soluzione che supera i tuoi obiettivi di crescita.
                        </p>
                    </div>
                </div>
            </section>

            <RoadServiceDetails />

            <section className="relative pt-12 pb-6 xl:py-16 bg-black flex items-center justify-center">
                <div className="w-full px-4 mx-auto flex flex-col md:flex-row xl:px-0 xl:max-w-7xl justify-between gap-10 md:gap-0">
                    <div className="w-full flex flex-col gap-10 md:pr-10 ">
                        <h2 className="text-white">
                            <div
                                className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                </svg>
                            </div>
                            Roadmapping
                        </h2>
                        <div className="w-full">
                            <p className="text-gray-400 font-light m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ut numquam? Quis ipsam possimus commodi ex cupiditate odit odio natus, repellendus esse earum expedita nulla asperiores assumenda corrupti placeat nam.</p>
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
                        <div className="md:px-4">
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
                    </div>
                </div>
            </section>

            <Testimonials />
            <RoadContact />
            <FaqContainer>
                {faqList.map((faq, index)=>
                    <Faq question={faq.question} answer={faq.answer} key={index}/>
                )}
            </FaqContainer>

        </StandardLayout>
    )
}

export default Roadmapping
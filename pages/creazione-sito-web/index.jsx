import Image from 'next/image'
import Link from 'next/link'
import { StandardLayout } from '../../layout'
import { Faq, SeoHead, WebServiceDetails, Testimonials, WebDevContact } from '../../components'
import { FaqContainer } from '../../container'


const WebsiteServicePage = () => {

    const faqList= [
        {
            question: 'Quanto costa un sito web di media',
            answer: 'Il costo di un sito web è influenzato da moltissimi fattori, tra cui il numero di pagine, le integrazione API, la tecnologia etc. A priori non sono in grado di stimare un costo per ciascun caso. Se vuoi un preventivo personalizzato contattami senza impegno.'
        },
        {
            question: 'Quale tecnologia utilizzi per lo sviluppo di siti web?',
            answer: 'Per i siti web utilizzo principalmente Next.js con Hygraph, un headless CMS per la gestione dei contenuti. Alternativamente sviluppo utilizzando Wordpress.'
        },
        {
            question: 'Possiamo iniziare a lavorare senza roadmapping?',
            answer: 'No. La roadmapping è essenziale per garantire che il tuo sito web soddisfi tutti i tuoi obiettivi di business.Mi consente di comprendere le tue esigenze e i tuoi punti deboli, ideare potenziali soluzioni e allinearmi sulla direzione da seguire prima di sviluppare.'
        },
        {
            question: 'Sviluppi siti ecommerce?',
            answer: 'Tendenzialmente no, ma valuto caso per caso, accettando solo clienti per cui sono certo di realizzare un prodotto di valore.'
        }
    ]


    return (
        <StandardLayout>
            <SeoHead 
                pageURL="https://wwww.nicolasricardi.com/creazione-sito-web"
                pageTitle="Creazione Siti Web per Aziende e Liberi Professionisti - Nicolas Ricardi"
                pageDesc="Lorem ipsum dolor sit amet"
                pageSocialDesc="Lorem ipsum dolor sit amet"
                pageKeywords="Nicolas Ricardi,Creazione sito web, sviluppo sito web, realizzazione sito web, sviluppo sito web Treviglio, creazione sito web Treviglio"
                pageCover="/assets/img/coverHome.png"
                websiteDomain="nicolasricardi.com"
            />

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


            
            <WebServiceDetails />

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
                            Struttura del progetto
                        </h2>
                        <div className="w-full">
                            <p className="text-gray-400 font-light m-0">
                                Questo servizio è l'ideale per coloro che vogliono iniziare a gettare delle fondamenta solide per costruire una presenza sul web.
                            </p>
                            <p className="text-gray-400 font-light mt-4">
                                Il mio tema custom, Aegis, garantisce prestazioni eccezionali (niente più caricamenti infiniti) e ti permetterà di concentrarti su quello che conta davvero, il marketing e le strategie commerciali.
                            </p>
                            <p className="text-gray-400 font-light mt-4">
                                P.S.: Anche io la utilizzo per il mio sito web.
                            </p>
                            <p className="text-gray-400 font-light mt-4">
                                P.P.S:. Aegis non è un tema grafico, bensì tecnico. Puoi provarlo <Link href="#" className="underline">qui</Link>
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:border-l-[1px] md:border-l-zinc-800 gap-10">
                        <div className="md:px-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">1. Roadmapping</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Analisi dati pregressi (se esistenti)</li>
                                <li className="">Ricerca e analisi dei competitor</li>
                                <li className="">Definizione K.P.I. del sito web</li>
                                <li className="">Sitemap e flussi di navigazione</li>
                            </ul>
                        </div>
                        <div className="md:px-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">2. Sviluppo del sito</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Design sito web</li>
                                <li className="">Creazione dei modelli nel CMS</li>
                                <li className="">Implementazione</li>
                                <li className="">Ottimizzazione Core Web Vitals</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-10">
                        <div className="md:pl-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">3. Integrazioni 3rd Party API</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Installazione Google Analytics e Search Console</li>
                                <li className="">Installazione Facebook Pixel</li>
                                <li className="">Intregazione servizio newsletter</li>
                                <li className="">Intregazioni personalizzate</li>
                            </ul>
                        </div>
                        <div className="md:pl-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">4. GDPR - Iubenda Bronze Partner</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Messa a norma dei moduli di contatto</li>
                                <li className="">Creazione e gestione Privacy e Cookie policy</li>
                                <li className="">Inserimento cookie banner</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            <WebDevContact />
            <FaqContainer>
                {faqList.map((faq, index)=>
                    <Faq question={faq.question} answer={faq.answer} key={index}/>
                )}
            </FaqContainer>
        </StandardLayout>
    )
}

export default WebsiteServicePage
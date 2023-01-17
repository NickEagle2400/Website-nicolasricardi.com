import Image from 'next/image'
import Link from 'next/link'
import { StandardLayout } from '../../layout'
import { BoxCrossSell, Hero, SeoHead } from '../../components'


const WebsiteServicePage = () => {
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
            <Hero 
                title="Creazione Sito Web"
                subtitle="SITI WEB RESPONSIVE E SU MISURA"
                description="Negli ultimi anni la competizione online è salita alle stelle e ora non basta più un semplice sito vetrina per far sapere agli utenti che esisti. Se vuoi davvero portare la tua attività al livello successivo devi necessariamente considerare il tuo sito web come l'asset principale per espanderti nel mondo digitale. "
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
                            Creazione Sito Web
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
                        <div className="bg-white w-full p-8 rounded-lg">
                            <p className="relative leading-relaxed">Investimento:</p>
                            <p className="text-2xl font-bold mt-2">Da 1500€ IVA esente</p>
                            <p className="my-1">+ costi di gestione mensile</p>
                            <p className="my-1 text-xs font-light">Prezzo indicativo. Per una valutazione dettagliata richiedi un preventivo. È possibile rateizzare il pagamento della prima quota.</p>
                            <div className="mt-6">
                                <Link className="btn-primary w-full text-center" href="/contatti">Si, voglio un sito web!</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:border-l-[1px] md:border-l-zinc-800 gap-10">
                        <div className="md:px-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">1. Analisi e Progettazione</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Analisi dati pregressi (se esistenti)</li>
                                <li className="">Definizione del cliente target</li>
                                <li className="">Ricerca e analisi dei competitor</li>
                                <li className="">Definizione K.P.I. del sito web</li>
                                <li className="">Sitemap e flussi di navigazione</li>
                            </ul>
                        </div>
                        <div className="md:px-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">2. Configurazione Ambiente</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Acquisto hosting e dominio</li>
                                <li className="">Installazione Aegis e CMS</li>
                                <li className="">Installazione certificato SSL</li>
                                <li className="">Creazione Email e Alias</li>
                            </ul>
                        </div>
                        <div className="md:px-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">3. Sviluppo del sito</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Design sito web</li>
                                <li className="">Implementazione</li>
                                <li className="">Creazione modulo di contatto</li>
                                <li className="">Creazione modulo newsletter</li>
                                <li className="">Integrazione servizi di terze parti</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-10">
                        <div className="md:pl-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">4. Monitoraggio e Tools Google</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Installazione Google Analytics</li>
                                <li className="">Installazione Google Search Console</li>
                                <li className="">Generazione Sitemap</li>
                                <li className="">Creazione Google My Business</li>
                            </ul>
                        </div>
                        <div className="md:pl-4">
                            <h3 className="bg-zinc-800 px-4 py-2 rounded-md text-white font-medium text-sm">5. GDPR - Iubenda Bronze Partner</h3>
                            <ul className="mt-4 text-gray-400 pl-4 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                <li className="">Messa a norma dei moduli di contatto</li>
                                <li className="">Creazione e gestione Privacy e Cookie policy</li>
                                <li className="">Inserimento cookie banner</li>
                            </ul>
                        </div>
                        <div className="bg-zinc-800 w-full ml-4 p-4 rounded-lg">
                            <h3 className="bg-zinc-800 rounded-md text-white font-medium text-sm">SERVIZI AGGIUNTIVI SU RICHIESTA</h3>
                            <p className="mt-4 text-gray-400 font-extralight list-disc list-inside leading-normal flex flex-col gap-1">
                                Il tuo sito web necessita di ulteriori funzionalità? Fammi sapere di cosa hai bisogno!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <BoxCrossSell />

        </StandardLayout>
    )
}

export default WebsiteServicePage
import Image from 'next/image'
import { StandardLayout } from '../../layout'
import { Testimonials, Faq, SeoHead, RoadServiceDetails, RoadContact, MaintenancePricing } from '../../components'
import { FaqContainer } from '../../container'



const MaintenanceServicePage = () => {

    const faqList= [
        {
            question: "Come posso cancellare l'abbonamento?",
            answer: "Se desideri annullare l'abbonamento, puoi farlo tramite il mio portale clienti. Puoi accedere utilizzando l'indirizzo e-mail collegato al tuo abbonamento."
        },
        {
            question: "Come posso passare da un piano all'altro o aggiornare?",
            answer: "Se desideri cambiare piano o eseguire l'upgrade, utilizza il portale clienti. Puoi accedere utilizzando l'indirizzo e-mail collegato al tuo abbonamento."
        },
        {
            question: 'Cosa succede se ho un sito Web multilingue o globale?',
            answer: 'In questo caso il tuo sito web necessita di soluzioni più complesse e studiate ad hoc. Se vuoi saperne di più inviami un messaggio.'
        },
        {
            question: 'Non so quale sia il piano più adatto per il mio sito, puoi aiutarmi?',
            answer: 'Se hai dei dubbi su quale sia il piano più adatto a te non esitare a contattarmi e insieme definiremo la soluzione migliore per il tuo business.'
        }
    ]


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

            <RoadServiceDetails />

            <Testimonials />
            <MaintenancePricing />
            <FaqContainer>
                {faqList.map((faq, index)=>
                    <Faq question={faq.question} answer={faq.answer} key={index}/>
                )}
            </FaqContainer>

        </StandardLayout>
    )
}

export default MaintenanceServicePage
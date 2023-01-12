import { BoxCallToAction, Hero } from '../components'
import { StandardLayout } from '../layout'

const FourOhFour = () => {
    return (
        <StandardLayout pageTitle="Pagina non trovata - Nicolas Ricardi">
            <Hero 
                title="Ops, la pagina che stai cercando non esiste."
                subtitle="Errore 404"
                description="Se pensi che ci sia un errore contattami o scrivimi alla mail info@nicolasricardi.com"
                />
            <BoxCallToAction />
        </StandardLayout>
    )
}

export default FourOhFour

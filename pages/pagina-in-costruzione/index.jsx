import { BoxCallToAction, Hero } from '../../components'
import { StandardLayout } from '../../layout'

const UnderConstruction = () => {
    return (
        <StandardLayout pageTitle="Pagina in costruzione - Nicolas Ricardi">
            <Hero 
                title="Ops, a quanto pare non ho ancora terminato di realizzare la pagina."
                subtitle="Pagina in costruzione"
                description="Se pensi che ci sia un errore contattami o scrivimi alla mail info@nicolasricardi.com"
                />
            <BoxCallToAction />
        </StandardLayout>
    )
}

export default UnderConstruction

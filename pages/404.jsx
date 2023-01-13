import { BoxCallToAction, Hero, SeoHead } from '../components'
import { StandardLayout } from '../layout'

const FourOhFour = () => {
    return (
        <StandardLayout>
            <SeoHead 
                pageURL="https://wwww.nicolasricardi.com/"
                pageTitle="Pagina non trovata - Nicolas Ricardi"
                pageDesc="Il contenuto che stai cercando non esiste."
                pageSocialDesc="Il contenuto che stai cercando non esiste."
                pageKeywords="Nicolas Ricardi"
                pageCover="/assets/img/coverHome.png"
                websiteDomain="nicolasricardi.com"
            />
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

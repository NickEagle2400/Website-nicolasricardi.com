import Image from 'next/image'
import { StandardLayout } from '../../layout'
import { Contact, SeoHead } from '../../components'


const ContactPage = () => {
    return (
        <StandardLayout>
            <SeoHead 
                pageURL="https://wwww.nicolasricardi.com/contatti"
                pageTitle="Contattami - Nicolas Ricardi"
                pageDesc="Compila il modulo per inviami un messaggio senza impegno."
                pageSocialDesc="Compila il modulo per inviami un messaggio senza impegno."
                pageKeywords="Nicolas Ricardi, contattami"
                pageCover="/assets/img/coverHome.png"
                websiteDomain="nicolasricardi.com"
            />
            <Contact />
        </StandardLayout>
    )
}

export default ContactPage
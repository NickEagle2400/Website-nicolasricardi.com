import Image from 'next/image'
import { StandardLayout } from '../../layout'
import { Contact, SeoHead } from '../../components'


const ContactPage = () => {
    const metadata = {
        url:"https://www.nicolasricardi.com/creazione-sito-web",
        metaTitle:"Consulenza Gratuita - Nicolas Ricardi web.dev",
        metaDescription:"Prenota 30 minuti di consulenza strategica gratuita con me per parlare del tuo sito web.",
        socialTitle:"Consulenza Gratuita - Nicolas Ricardi web.dev",
        SocialDescription:"Prenota 30 minuti di consulenza strategica gratuita con me per parlare del tuo sito web.",
        metaKeywords:"Nicolas Ricardi, consulenza sito web, consulenza gratuita sito web, consulenza sito web treviglio",
        socialImage:{
            url:"https://www.nicolasricardi.com/assets/img/coverHome.png",
        },
        domain:"nicolasricardi.com"
    }
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
            <Contact />
        </StandardLayout>
    )
}

export default ContactPage
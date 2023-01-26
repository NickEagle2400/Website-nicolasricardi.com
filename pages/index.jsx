import Head from 'next/head'
import Image from 'next/image'
import { BannerLogos, BoxCallToAction, MainHero, NewsletterBox, SeoHead, ServiceCards, ServiceDetails, Testimonials } from '../components'
import { StandardLayout } from '../layout'

const Home = () => {

  const metadata = {
    url:"https://www.nicolasricardi.com/",
    metaTitle:"Cresci e Genera Potenziali Clienti Ogni Giorno Grazie al tuo Sito Web - Nicolas Ricardi web.dev",
    metaDescription:"Ti aiuto a crescere e ad affermarti online grazie a siti web che generano costantemente un flusso di potenziali clienti interessati ai tuoi prodotti o servizi.",
    socialTitle:"Cresci e Genera Potenziali Clienti Ogni Giorno Grazie al tuo Sito Web - Nicolas Ricardi web.dev",
    SocialDescription:"Ti aiuto a crescere e ad affermarti online grazie a siti web che generano costantemente un flusso di potenziali clienti interessati ai tuoi prodotti o servizi.",
    metaKeywords:"Nicolas Ricardi,Creazione sito web, sviluppo sito web, realizzazione sito web, sviluppo sito web Treviglio, creazione sito web Treviglio, lead generation",
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
      <MainHero />
      <BannerLogos />
      <ServiceCards />
      <NewsletterBox />
      <Testimonials />
      <BoxCallToAction />
    </StandardLayout>
  )
}

export default Home

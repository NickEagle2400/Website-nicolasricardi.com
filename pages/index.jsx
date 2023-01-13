import Head from 'next/head'
import Image from 'next/image'
import { BannerLogos, BoxCallToAction, MainHero, NewsletterBox, SeoHead, ServiceCards, ServiceDetails, Testimonials } from '../components'
import { StandardLayout } from '../layout'

const Home = () => {
  return (
    <StandardLayout>
      <SeoHead 
        pageURL="https://wwww.nicolasricardi.com/"
        pageTitle="Creo siti web che convertono i visitatori in clienti - Nicolas Ricardi web.dev"
        pageDesc="Mi occupo di progettazione e creazioni di siti web orientati a trasformare i visitatori in potenziali clienti per la tua attività o libera professione."
        pageSocialDesc="Progetto siti web in grado di convertire i visitari in lead per la tua attività"
        pageKeywords="Nicolas Ricardi, Realizzazione siti Web Treviglio, Realizzazione siti web Bergamo, Creazione siti web Bergamo, Creazione siti web Treviglio, Lead generation Treviglio, lead generation Bergamo, Lead generation b2b"
        pageCover="/assets/img/coverHome.png"
        websiteDomain="nicolasricardi.com"
      />
      <MainHero />
      <BannerLogos />
      <ServiceCards />
      <ServiceDetails />
      <NewsletterBox />
      <Testimonials />
      <BoxCallToAction />
    </StandardLayout>
  )
}

export default Home

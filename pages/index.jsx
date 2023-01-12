import Head from 'next/head'
import Image from 'next/image'
import { BannerLogos, BoxCallToAction, MainHero, NewsletterBox, ServiceCards, ServiceDetails, Testimonials } from '../components'
import { StandardLayout } from '../layout'

const Home = () => {
  return (
    <StandardLayout pageTitle="Homepage - Nicolas Ricardi">
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

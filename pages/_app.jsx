import '../styles/globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp

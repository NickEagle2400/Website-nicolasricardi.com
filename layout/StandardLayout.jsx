import Head from 'next/head'
import Image from 'next/image'
import { Header, Footer } from '../components'

const StandardLayout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#000000"></meta>

                <link rel="canonical" href="https://www.nicolasricardi.com" />

                <meta name="description" content="Checkout our cool page" key="desc" />
                <meta name="keyword" content="Nicolas Ricardi" />

                <meta property="og:title" content="Social Title for Cool Page" />
                <meta
                    property="og:description"
                    content="And a social description for our cool page"
                />
                <meta
                    property="og:image"
                    content="https://example.com/images/cool-page.jpg"
                />
            </Head>
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}

export default StandardLayout

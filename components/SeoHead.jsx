import Head from "next/head"

const SeoHead = (props) => {

    return (
        <Head>
            <link rel="canonical" href={props.pageURL} />

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#2b5797" />
            <meta name="theme-color" content="#000000"></meta>

            <title>{props.pageTitle}</title>

            <meta name="title" content={props.pageTitle} />
            <meta name="description" content={props.pageDesc} />
            <meta name="keywords" content={props.pageKeywords} />

            <meta property="og:url" content={props.pageURL} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.pageTitle} />
            <meta property="og:description" content={props.pageSocialDesc} />
            <meta property="og:image" content={props.pageCover} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={props.websiteDomain} />
            <meta property="twitter:url" content={props.pageURL} />
            <meta name="twitter:title" content={props.pageTitle} />
            <meta name="twitter:creator" content="@nick_ricardi00" />
            <meta name="twitter:description" content={props.pageSocialDesc} />
            <meta name="twitter:image" content={props.pageCover} />
        </Head>
    )
}

export default SeoHead
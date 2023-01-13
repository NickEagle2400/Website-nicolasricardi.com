import Head from 'next/head'
import Image from 'next/image'
import { Header, Footer } from '../components'

const StandardLayout = (props) => {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    )
}

export default StandardLayout

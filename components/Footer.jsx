import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/img/logo_w.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTwitter  } from "@fortawesome/free-brands-svg-icons"
import IubendaBronzePartner from '../public/assets/img/iubenda.png'

const Footer = () => {
    return(
        <footer className="relative bg-black">
            <div className="w-full xl:max-w-7xl mx-auto flex justify-between items-center h-full ">
                <div className="w-full">
                    <div className="flex flex-col px-6 xl:px-0 md:flex-row justify-between border-b-[1px] border-[#374151] pt-12 xl:pt-20 pb-12 gap-6">
                        <div className="flex flex-col w-100 xl:w-2/5 pr-6">
                            <h3 className="sr-only">Sviluppatore Web Freelance</h3>
                            <div className="w-[50px] mb-6">
                                <Link href="/"><Image src={Logo} alt="Logo Nicolas Ricardi" /></Link>
                            </div>
                            <p className="leading-normal font-light text-gray-400 text-sm mb-2">Nicolas Ricardi - Sviluppatore Web Freelance</p>
                            <p className="leading-normal font-light text-gray-400 text-sm mb-2">Partita IVA: 04455400160 </p>
                            <p className="leading-normal font-light text-gray-400 text-sm mb-2">Mail: info@nicolasricardi.com</p>
                        </div>
                        <div className="hidden md:flex flex-col w-100 xl:w-1/5">
                            <h3 className="font-medium text-white mb-4">Servizi</h3>
                            <ul className="flex flex-col gap-3 text-gray-400 font-light text-sm">
                                <li className="p-0 m-0">
                                    <Link href="/roadmapping" className="hover:text-white">Roadmapping</Link>
                                </li>
                                <li className="p-0 m-0">
                                    <Link href="/creazione-sito-web" className="hover:text-white">Creazione Sito Web</Link>
                                </li>
                                <li className="p-0 m-0">
                                    <Link href="/manutenzione-sicurezza" className="hover:text-white">Manutenzione & Sicurezza</Link>
                                </li>
                                <li className="p-0 m-0">
                                    <Link href="/pagina-in-costruzione" className="hover:text-white">Audit Core Web Vitals</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex flex-col w-100 xl:w-1/5">
                            <h3 className="font-medium text-white mb-4">Link Utili</h3>
                            <ul className="flex flex-col gap-3 text-gray-400 font-light text-sm">
                                <li className="p-0 m-0">
                                    <Link href="/" className="hover:text-white">Home</Link>
                                </li>
                                <li className="p-0 m-0">
                                    <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
                                </li>
                                <li className="p-0 m-0">
                                    <Link href="/blog" className="hover:text-white">Blog</Link>
                                </li>
                                <li className="p-0 m-0">
                                    <Link href="/contatti" className="hover:text-white">Contatti</Link>
                                </li>
                                <li className="p-0 m-0">
                                    <Link href="https://billing.stripe.com/p/login/6oEaGb2E41nj0O4aEE" target="_blank" className="hover:text-white">Portale Clienti</Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="flex flex-col w-100 xl:w-1/5">
                            <h3 className="font-medium text-white mb-4">Legale</h3>
                            <ul className="flex flex-row md:flex-col gap-3 text-gray-400 font-light text-sm">
                                <li className="p-0 m-0">
                                    <Link href="https://www.iubenda.com/privacy-policy/53749962"
                                        className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe hover:text-white"
                                        title="Privacy Policy ">Privacy Policy</Link>
                                </li>
                                <li className="p-0 m-0">
                                    <Link href="https://www.iubenda.com/privacy-policy/53749962/cookie-policy"
                                        className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe hover:text-white"
                                        title="Cookie Policy ">Cookie Policy</Link>
                                </li>
                                <li className="p-0 m-0">
                                    <Link href="" className="hover:text-white">Preferenze</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-6 flex flex-col-reverse gap-6 xl:gap-0 xl:flex-row align-center justify-center">
                        <div className="w-full xl:w-1/3 flex items-center text-center px-6 xl:px-0 xl:text-left">
                            <p className="text-gray-400 text-sm font-light leading-normale w-full text-center xl:text-left leading-normal">
                                Sviluppato con <Link href="https://nextjs.org/" rel='external'>Next.js</Link> & <Link href="https://www.nicolasricardi.com">Hygraph</Link><br />© <span id="year">2023</span> Nicolas Ricardi - Tutti i diritti sono riservati</p>
                        </div>
                        <div className="w-full xl:w-1/3 flex items-center justify-center">
                            <p className="text-center">
                                <Link href="https://www.facebook.com/nicolas.ricardi.77/" rel='me'  target='_blank'>
                                    <span className="sr-only">Facebook</span>
                                    <FontAwesomeIcon icon={faFacebookF} className="text-gray-400 text-xl mx-2 hover:text-white" />
                                </Link>
                                <Link href="https://www.instagram.com/nick_ricardi/" rel='me'  target='_blank'>
                                    <span className="sr-only">Instagram</span>
                                    <FontAwesomeIcon icon={faInstagram} className="text-gray-400 text-xl mx-2 hover:text-white" />
                                </Link>
                                <Link href="https://twitter.com/nick_ricardi00" rel='me'  target='_blank'>
                                    <span className="sr-only">Twitter</span>
                                    <FontAwesomeIcon icon={faTwitter} className="text-gray-400 text-xl mx-2 hover:text-white" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/nicolasricardi/" rel='me'  target='_blank'>
                                    <span className="sr-only">Linkedin</span>
                                    <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 text-xl mx-2 hover:text-white" />
                                </Link>
                            </p>
                        </div>
                        <div className="w-full xl:w-1/3 flex justify-center xl:justify-end">
                                <Image src={IubendaBronzePartner} alt="Nicolas Ricardi è un Partner Iubenda Certificato di livello Bronze" width={200} height={120}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
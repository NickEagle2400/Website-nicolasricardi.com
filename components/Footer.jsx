import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/img/logo_w.png'

const Footer = () => {
    return(
        <footer className="relative bg-black">
            <div className="w-full xl:max-w-7xl mx-auto flex justify-between items-center h-full ">
                <div className="w-full">
                    <div className="flex flex-col px-6 xl:px-0 md:flex-row justify-between border-b-[1px] border-[#374151] pt-12 xl:pt-20 pb-12 gap-6">
                        <div className="flex flex-col w-100 xl:w-2/5 pr-6">
                            <h3 className="sr-only">Sviluppatore Web Freelance</h3>
                            <div className="w-[50px] mb-6">
                                <Image src={Logo} alt="" />
                            </div>
                            <p className="leading-normal font-light text-gray-400 text-sm mb-2">Nicolas Ricardi - Sviluppatore Web Freelance</p>
                            <p className="leading-normal font-light text-gray-400 text-sm mb-2">Partita IVA: 04455400160 </p>
                            <p className="leading-normal font-light text-gray-400 text-sm mb-2">Mail: info@nicolasricardi.com</p>
                        </div>
                        <div className="hidden md:flex flex-col w-100 xl:w-1/5">
                            <h3 className="font-medium text-white mb-4">Servizi</h3>
                            <ul className="flex flex-col gap-3 text-gray-400 font-light text-sm">
                                <li className="p-0 m-0">
                                    <a href="" className="hover:text-white">Sviluppo Siti Web</a>
                                </li>
                                <li className="p-0 m-0">
                                    <a href="" className="hover:text-white">SEO</a>
                                </li>
                                <li className="p-0 m-0">
                                    <a href="" className="hover:text-white">Convertion Rate Optimization</a>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex flex-col w-100 xl:w-1/5">
                            <h3 className="font-medium text-white mb-4">Link Utili</h3>
                            <ul className="flex flex-col gap-3 text-gray-400 font-light text-sm">
                                <li className="p-0 m-0">
                                    <a href="" className="hover:text-white">Chi sono</a>
                                </li>
                                <li className="p-0 m-0">
                                    <a href="" className="hover:text-white">Portfolio</a>
                                </li>
                                <li className="p-0 m-0">
                                    <a href="" className="hover:text-white">Contatti</a>
                                </li>
                                <li className="p-0 m-0">
                                    <a href="" className="hover:text-white">Collaborazioni</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-100 xl:w-1/5">
                            <h3 className="font-medium text-white mb-4">Legale</h3>
                            <ul className="flex flex-row md:flex-col gap-3 text-gray-400 font-light text-sm">
                                <li className="p-0 m-0">
                                    <a href="https://www.iubenda.com/privacy-policy/53749962"
                                        className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe hover:text-white"
                                        title="Privacy Policy ">Privacy Policy</a>
                                </li>
                                <li className="p-0 m-0">
                                    <a href="https://www.iubenda.com/privacy-policy/53749962/cookie-policy"
                                        className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe hover:text-white"
                                        title="Cookie Policy ">Cookie Policy</a>
                                </li>
                                <li className="p-0 m-0">
                                    <a href="" className="hover:text-white">Preferenze</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-6 flex flex-col-reverse gap-6 xl:gap-0 xl:flex-row align-center justify-center">
                        <div className="w-full xl:w-2/3 flex items-center text-center px-6 xl:px-0 xl:text-left">
                            <p className="text-gray-400 text-sm font-light leading-normale w-full text-center xl:text-left">© <span id="year"></span>
                                <a href="https://www.nicolasricardi.com">Nicolas Ricardi</a> - Tutti i diritti sono riservati</p>
                        </div>
                        <div className="w-full xl:w-1/3">
                            <p className="text-center xl:text-right">
                                <a href=""><i className="fa-brands fa-facebook-f text-gray-400 text-xl mx-2 hover:text-white"></i></a>
                                <a href=""><i className="fa-brands fa-instagram text-gray-400 text-xl mx-2 hover:text-white"></i></a>
                                <a href=""><i className="fa-brands fa-twitter text-gray-400 text-xl mx-2 hover:text-white"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin-in text-gray-400 text-xl mx-2 hover:text-white"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
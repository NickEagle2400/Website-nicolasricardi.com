import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/img/logo_w.png'

const Header = () => {


    const [showMegamenu, setShowMegamenu] = useState(false);
    const toggleMegamenu = () => {
        setShowMegamenu(!showMegamenu);
    }

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        console.log(showMobileMenu)
        setShowMobileMenu(!showMobileMenu);
    }

    return(
        <header className="bg-black sticky top-0 z-[1000] xl:px-0 border-b-[1px] border-b-zinc-700">
            <section className="relative w-full py-2 bg-white text-black text-center text-sm" id="topbar">
                <p className="text-black w-full px-4 mx-auto xl:max-w-7xl xl:px-0 font-light">
                    Hai paura che la homepage del tuo sito non sia ottimizzata?<Link href="/pagina-in-costruzione"><span className="text-black font-bold hover:underline"> Scarica gratis la checklist!<i className="fa-solid fa-arrow-up-right-from-square pl-1"></i></span></Link>
                </p>
            </section>
            <div className="pointer-events-none absolute shadow w-full h-full top-0 left-0 z-50"></div>
            <div className="relative w-full xl:max-w-7xl mx-auto flex justify-between items-center h-full py-2 px-4 xl:px-0">
                <div className="w-[50px] text-left">
                    <Link href="/">
                        <span className='sr-only'>Nicolas Ricardi Logo</span>
                        <Image src={Logo} alt="Logo Nicolas Ricardi"/>
                    </Link>
                </div>
                <div className="flex items-center h-full gap-2">
                    <Link href="/pagina-in-costruzione" className="cursor-pointer hidden text-gray-300 xl:block text-sm font-light p-2 transition-colors duration-100 hover:text-white">
                        Chi Sono
                    </Link>
                    <span className="hidden text-gray-300 xl:block text-sm font-light p-2 cursor-pointer select-none transition-colors duration-100 hover:text-white" id="serviceMenu" onClick={toggleMegamenu} >
                        Servizi
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-3 h-3 inline pointer-events-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                    <div className="absolute top-[calc(100%_+_0px)] left-0 w-full bg-black drop-shadow-lg z-10 pt-8 rounded-b-md border-[1px] border-zinc-700 border-t-0" id="megamenu" style={{display: showMegamenu?"block":"none"}}>
                        <div className="flex flex-col gap-4 pb-6 px-6">
                            <div className="flex flex-row gap-6 items-center justify-between">
                                <Link href="/creazione-sito-web" className="w-1/3">
                                    <div className="cursor-pointer w-full p-6 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-100">
                                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center drop-shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                            </svg>
                                        </div>
                                        <p className="my-3 text-white ">Sviluppo Sito Web</p>
                                        <p className="leading-normal font-light text-gray-400 text-sm">Soluzioni complete per la creazione di siti web professionali in grado di attirare il traffico e convertire i visitatori in clienti.</p>
                                        <p className="text-main text-sm mt-4 text-white">Come posso aiutarti 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 inline">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/ottimizzazione-seo" className="w-1/3">
                                    <div className="cursor-pointer w-full p-6 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-100" >
                                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center drop-shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                            </svg>
                                        </div>
                                        <p className="my-3 text-white ">Search Engine Optimization</p>
                                        <p className="leading-normal font-light text-gray-400 text-sm">Un sito ben ottimizzato a livello tecnico è fondamentale per garantire che i motori di ricerca possano indicizzare il suo contenuto.</p>
                                        <p className="text-main text-sm mt-4 text-white">Come posso aiutarti 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 inline">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/ottimizzazione-conversion-rate" className="w-1/3">
                                    <div className="cursor-pointer w-full p-6 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-100">
                                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center drop-shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-black">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                            </svg>
                                        </div>
                                        <p className="my-3 text-white ">Convertion Rate Optimization</p>
                                        <p className="leading-normal font-light text-gray-400 text-sm">Traccia, monitora e analizza il comportamento degli utenti sul tuo sito web per migliorare la tua strategia di acquisizione clienti.</p>
                                        <p className="text-main text-sm mt-4 text-white">Come posso aiutarti 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 inline">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full px-6 py-2 bg-zinc-900 rounded-b-lg border-t-[1px] border-zinc-700">
                            <div className="flex flex-row gap-6">
                                <Link href="/pagina-in-costruzione">
                                    <div className="cursor-pointer hover:bg-zinc-800 px-4 py-3 rounded-md">
                                        <p className="flex items-center gap-2 text-gray-200 font-light text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor"
                                                className="w-6 h-6 inline text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                            </svg>
                                            Risorse Gratuite
                                        </p>
                                    </div>
                                </Link>
                                <Link href="/pagina-in-costruzione">
                                    <div className="cursor-pointer hover:bg-zinc-800 px-4 py-3 rounded-md">
                                        <p className="flex items-center gap-2 text-gray-200 font-light text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor"
                                                className="w-6 h-6 inline text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                            </svg>
                                            Audit Sito Web
                                        </p>
                                    </div>
                                </Link>
                                <Link href="/contatti">
                                    <div className="cursor-pointer hover:bg-zinc-800 px-4 py-3 rounded-md">
                                        <p className="flex items-center gap-2 text-gray-200 font-light text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor"
                                                className="w-6 h-6 inline text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                            </svg>
                                            Prenota una Consulenza
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/pagina-in-costruzione" className="hidden text-gray-300 xl:block text-sm font-light p-2 transition-colors duration-100 hover:text-white">
                        Portfolio
                    </Link>

                    <Link href="/blog" className="hidden text-gray-300 xl:block text-sm font-light p-2 transition-colors duration-100 hover:text-white">
                        Blog
                    </Link>

                    <div className="hidden xl:block xl:ml-4">
                        <Link href="/contatti" className="btn-secondary">
                            Lavoriamo insieme
                        </Link>
                    </div>
                    <div className="relative flex flex-col gap-2 items-end justify-center xl:hidden" id="mobileMenu" onClick={toggleMobileMenu}>
                        <span className="w-8 h-[1px] rounded-lg relative after:absolute after:top-0 after:bottom-0 after:left-0 after:w-full after:bg-white"></span>
                        <span className="w-6 h-[1px] rounded-lg relative after:absolute after:top-0 after:bottom-0 after:left-0 after:w-full after:bg-white"></span>
                        <span className="w-10 h-[1px] rounded-lg relative after:absolute after:top-0 after:bottom-0 after:left-0 after:w-full after:bg-white"></span>
                    </div>
                </div>
            </div>

            <section id="mobileModal" className="fixed top-0 h-screen bg-transparent w-full z-[500] -right-full transition-all duration-300 xl:hidden py-2 px-2 overflow-y-scroll" style={{transform: showMobileMenu?"translateX(-100%)":"unset"}}>
                <div className="bg-black py-8 px-6 h-auto drop-shadow-md rounded-lg border-[1px] border-white">
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="w-[50px]">
                            <Link href="/"><Image src={Logo} alt="Logo Nicolas Ricardi" /></Link>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <div id="closeMobileModal" onClick={toggleMobileMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-200">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">

                        <Link href="/creazione-sito-web">
                            <div className="flex flex-row gap-2 items-center py-2 border-b-[1px] border-zinc-700">
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center drop-shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                    </svg>
                                </div>
                                <p className="text-gray-300 font-light">Sviluppo Sito Web</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-3 h-3 text-zinc-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </Link>

                        <Link href="/ottimizzazione-seo">
                            <div href="" className="flex flex-row gap-2 items-center py-2 border-b-[1px] border-zinc-700">
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center drop-shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                    </svg>
                                </div>
                                <p className="text-gray-300 font-light">SEO</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-3 h-3 text-zinc-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </Link>

                        <Link href="/ottimizzazione-conversion-rate">
                            <div href="" className="flex flex-row gap-2 items-center py-2">
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center drop-shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                    </svg>
                                </div>
                                <p className="text-gray-300 font-light">Content Strategy</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-3 h-3 text-zinc-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-row gap-12 border-t-[1px] border-zinc-300 mt-4 pt-4">
                        <div className="flex flex-col w-1/2">
                            <Link href="/pagina-in-costruzione">
                                <span className="block py-2 font-light text-gray-300">
                                    Chi Sono
                                </span>
                            </Link>
                            <Link href="/pagina-in-costruzione">
                                <span className="block py-2 font-light text-gray-300">
                                    Portfolio
                                </span>
                            </Link>
                            <Link href="/blog">
                                <span className="block py-2 font-light text-gray-300">
                                    Blog
                                </span>
                            </Link>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <Link href="/pagina-in-costruzione">
                                <span className="block py-2 font-light text-gray-300">
                                    Audit Sito Web
                                </span>
                            </Link>
                            <Link href="/pagina-in-costruzione">
                                <span className="block py-2 font-light text-gray-300">
                                    Consulenza
                                </span>
                            </Link>
                            <Link href="/pagina-in-costruzione">
                                <span className="block py-2 font-light text-gray-300">
                                    Risorse Gratuite
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link href="/contatti">
                            <span className="btn-secondary block text-center">
                                Lavoriamo insieme
                            </span>
                        </Link>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-400 font-ligh text-sm text-center">
                            Hai delle domande?
                            <Link href="/pagina-in-costruzione">
                                <span className="text-main text-gray-200" href="#">
                                    &nbsp;Vai alle F.A.Q.
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header
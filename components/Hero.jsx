import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Portrait from '../public/assets/img/me.png'


const Hero = (props) => {
    return(
        <section className="relative pt-12 pb-6 xl:py-16 bg-black flex items-center justify-center}">
            <div className="w-full md:w-2/3 px-4 mx-auto flex flex-col xl:px-0 xl:max-w-7xl items-center">
                <h1 className="text-3xl text-white font-bold w-full mx-auto relative leading-tight xl:text-4xl text-center">{props.title}</h1>
                <p className="relative leading-relaxed font-light text-gray-300 text-center mt-4">
                    {props.subtitle}
                </p>
                <p className="relative leading-relaxed font-light text-gray-400 text-center mt-10">
                    {props.description}
                </p>
            </div>
        </section>
    )
}

export default Hero
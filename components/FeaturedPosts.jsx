import Link from 'next/link'


const FeaturedPosts = () => {
    return(
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="w-full px-4 mx-auto xl:px-0 xl:max-w-7xl">
                <h2 className="text-3xl xl:text-4xl font-medium xl:font-bold text-white leading-snug mb-16 mt-0 text-center xl:text-left">Non sai da dove iniziare?</h2>
                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-6 xl:gap-12">
                    <a className="bg-zinc-900 rounded-md w-full md:w-1/3 xl:w-full p-6 transition-transform duration-200 hover:-translate-y-2 flex flex-row justify-between gap-4 items-center" href="#">
                        <div className="">
                            <h2 className="text-white text-lg">
                                Guida definitiva sulla realizzazione di un sito web in grado di generare lead di potenziali clienti
                            </h2>
                        </div>
                    </a>
                    <a className="bg-zinc-900 rounded-md w-full md:w-1/3 xl:w-full p-6 transition-transform duration-200 hover:-translate-y-2 flex flex-row justify-between gap-4 items-center" href="#">
                        <div>
                            <h2 className="text-white text-lg">
                                Guida definitiva al lato tecnico della SEO: quali sono gli aspetti fondamentali da considerare?
                            </h2>
                        </div>
                    </a>
                    <a className="bg-zinc-900 rounded-md w-full md:w-1/3 xl:w-full p-6 transition-transform duration-200 hover:-translate-y-2 flex flex-row justify-between gap-4 items-center" href="#">
                        <div className="">
                            <h2 className="text-white text-lg">
                                Conversion Rate Optimization: cos'è e come può diventare fondamentale per far crescere la tua attività
                            </h2>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FeaturedPosts
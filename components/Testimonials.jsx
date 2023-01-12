import Link from 'next/link'
import Image from 'next/image'
import RevFirst from '../public/assets/img/rev1.webp'
import RevSecond from '../public/assets/img/rev2.webp'



const Testimonials = () => {
    return(
        <section className="relative py-12 xl:py-20 bg-black px-4 xl:px-0">
            <div className="w-full mx-auto xl:max-w-7xl h-full">
                <h2 className="text-3xl xl:text-4xl font-medium xl:font-bold text-white leading-snug mb-16 mt-0 text-center xl:text-left">I miei clienti dicono di me</h2>
                <div className="flex flex-col md:flex-row gap-12 items-stretch">
                    <div className="w-full xl:w-1/2">
                        <div className="flex flex-col xl:flex-row gap-6 items-center">
                            <div className="w-1/2 ">
                                <Image src={RevFirst} alt=""/>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <div>
                                    <h3 className="text-2xl xl:text-3xl font-medium text-white leading-snug mb-4 mt-0">Lorem ipsum dolor sit amet</h3>
                                    <p className="text-gray-500 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam provident veritatis saepe totam natus molestiae tempore, itaque odit? Distinctio expedita accusamus, qui exercitationem consectetur quis ipsa! Animi, nesciunt nisi?</p>
                                    <div className="mt-8">
                                        <p className="text-gray-400 font-medium">Antonio La Falce</p>
                                        <p className="text-gray-400 font-light">Hintime Group</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <div className="flex flex-col xl:flex-row gap-6 items-center">
                            <div className="w-1/2">
                                <Image src={RevSecond} alt=""/>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <div>
                                    <h3 className="text-2xl xl:text-3xl font-medium text-white leading-snug mb-4 mt-0">Lorem ipsum dolor sit amet</h3>
                                    <p className="text-gray-500 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam provident veritatis saepe totam natus molestiae tempore, itaque odit? Distinctio expedita accusamus, qui exercitationem consectetur quis ipsa! Animi, nesciunt nisi?</p>
                                    <div className="mt-8">
                                        <p className="text-gray-400 font-medium">Antonio La Falce</p>
                                        <p className="text-gray-400 font-light">Hintime Group</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
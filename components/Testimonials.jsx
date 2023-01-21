import Link from 'next/link'
import Image from 'next/image'
import RevFirst from '../public/assets/img/rev1.webp'
import RevSecond from '../public/assets/img/rev2.webp'



const Testimonials = () => {
    return(
        <section className="relative py-12 xl:py-20 bg-black px-4 xl:px-0">
            <div className="w-full mx-auto xl:max-w-7xl h-full">
                <div className="w-full flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-white mb-8">
                            <div className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </div>
                            Recensioni
                        </h2>
                        <h3 className="text-white font-medium text-3xl xl:text-4xl xl:font-bold xl:leading-tight mb-4">Alcune testimonianze di imprenditori e professionisti con cui ho lavorato</h3>
                        <p className="text-gray-400 font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla repellat ipsam, dolorum incidunt magni dolor minima error ratione itaque, sed harum sint commodi! Odit, molestiae numquam cumque cum corporis dolorem.</p>
                    </div>
                    <div className="w-full lg:w-1/2"> 
                        <div className="flex flex-col w-full gap-4 rounded-md">
                            <div className="flex items-center gap-4 px-4 pt-8 pb-4 rounded-md transition-colors duration-200 hover:bg-zinc-900">
                                <div className='min-w-[80px] h-[80px] rounded-full overflow-hidden relative'>
                                    <Image src={RevFirst} fill alt style={{objectFit:"cover"}}/>
                                </div>
                                <div className='w-full relative'>
                                    <p className="text-8xl absolute opacity-20 -top-6 -left-6 text-white italic pointer-events-none select-none">"</p>
                                    <p className="text-gray-400 font-light cursor-default mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima voluptate natus quia earum consectetur repellendus temporibus sint, vero amet nemo rem soluta? Architecto excepturi ratione quos perferendis! Maiores, deserunt.</p>
                                    <p className="text-gray-300 cursor-default font-medium">Antonio La Falce</p>
                                    <p className="text-gray-300 cursor-default font-medium">CEO Hintime Group</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 px-4 pt-8 pb-4 rounded-md transition-colors duration-200 hover:bg-zinc-900">
                                <div className='min-w-[80px] h-[80px] rounded-full overflow-hidden relative'>
                                    <Image src={RevSecond} fill alt style={{objectFit:"cover"}}/>
                                </div>
                                <div className='w-full relative'>
                                    <p className="text-8xl absolute opacity-20 -top-6 -left-6 text-white italic pointer-events-none select-none">"</p>
                                    <p className="text-gray-400 font-light cursor-default mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima voluptate natus quia earum consectetur repellendus temporibus sint, vero amet nemo rem soluta? Architecto excepturi ratione quos perferendis! Maiores, deserunt.</p>
                                    <p className="text-gray-300 cursor-default font-medium">Antonio La Falce</p>
                                    <p className="text-gray-300 cursor-default font-medium">CEO Hintime Group</p>
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
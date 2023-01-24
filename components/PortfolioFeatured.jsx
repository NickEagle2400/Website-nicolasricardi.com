import Image from "next/image"
import Link from "next/link"
import Test from '../public/assets/img/test-blog.jpeg'
const PortfolioFeatured = () =>{

    return(
        <section className="relative py-12 xl:py-20 bg-black">
            <div className="w-full px-4 mx-auto xl:px-0 xl:max-w-7xl">
                <div className="flex gap-12">
                    <Link className="block w-full" href="#">
                        <div className="relative w-full min-h-[200px]">
                            <Image src={Test} style={{objectFit:"contain"}}/>
                        </div>
                        <div>
                            <p className="text-2xl text-white">Hintime Beauty Spa Treviglio</p>
                            <p>Lorem ipsum dolor sti amet</p>
                        </div>
                    </Link>
                    <Link className="block w-full" href="#">
                        <div className="relative w-full min-h-[200px]">
                            <Image src={Test} style={{objectFit:"contain"}}/>
                        </div>
                        <div>
                            <p className="text-2xl text-white">Hintime Beauty Spa Treviglio</p>
                            <p>Lorem ipsum dolor sti amet</p>
                        </div>
                    </Link>
                    <Link className="block w-full" href="#">
                        <div className="relative w-full min-h-[200px]">
                            <Image src={Test} style={{objectFit:"contain"}}/>
                        </div>
                        <div>
                            <p className="text-2xl text-white">Hintime Beauty Spa Treviglio</p>
                            <p>Lorem ipsum dolor sti amet</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PortfolioFeatured
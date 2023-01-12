import Image from 'next/image'
import Logo from '../public/assets/img/tuple-logo-gray-400.svg'

const BannerLogos = (props) => {
    return (
        <div className="bg-black">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 md:flex flex-row flex-wrap xl:flex-nowrap justify-around xl:justify-between ">
                <div className="flex justify-center md:col-span-2 lg:col-span-1 items-center xl:items-start h-12 transition-transform duration-200 hover:scale-110">
                    <Image src={Logo} alt="Tuple"  />
                </div>
                <div className="flex justify-center md:col-span-2 lg:col-span-1 items-center xl:items-start h-12 transition-transform duration-200 hover:scale-110">
                    <Image src={Logo} alt="Mirage" />
                </div>
                <div className="flex justify-center md:col-span-2 lg:col-span-1 items-center xl:items-start h-12 transition-transform duration-200 hover:scale-110">
                    <Image src={Logo} alt="StaticKit" />
                </div>
                <div className="flex justify-center md:col-span-3 lg:col-span-1 items-center xl:items-start h-12 transition-transform duration-200 hover:scale-110">
                    <Image src={Logo} alt="Transistor" />
                </div>
                <div className="hidden xl:flex justify-center md:col-span-3 lg:col-span-1 items-center xl:items-start h-12 transition-transform duration-200 hover:scale-110">
                    <Image src={Logo} alt="Workcation" />
                </div>
            </div>
            </div>
        </div>
        )
    }

export default BannerLogos
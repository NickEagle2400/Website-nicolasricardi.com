const FaqContainer = (props) =>{
    return(
        <section className="relative pt-6 pb-6 xl:py-20 bg-black flex items-center justify-center">
            <div className="w-full px-2 md:px-4 mx-auto flex flex-col xl:px-0 xl:max-w-7xl xl:gap-8 gap-12">
                <div>
                    <h2 className="text-white mb-8">
                        <div className="w-10 h-10 rounded-lg bg-white inline-flex items-center justify-center drop-shadow-lg mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>

                        </div>
                        Domande Frequenti
                    </h2>
                    
                </div>
                <div className="w-full grid gap-y-4 gap-x-12 grid-cols-1 lg:grid-cols-2  justify-center">
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default FaqContainer
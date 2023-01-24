const Faq = (props) =>{
    return(
        <div className="w-full py-4">
            <h3 className="text-white text-2xl">{props.question}</h3>
            <p className="text-gray-400 font-light mt-6 leading-6">{props.answer}</p>
        </div>
    )
}

export default Faq
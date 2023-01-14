import { useState } from "react";

const NewsletterForm = () =>{

    const [inputEmail, setInputEmail] = useState("");

    const handleChange = (e) => {
        setInputEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(inputEmail);

        const options = {
            method: 'POST',
            headers: {accept: 'application/json', 'content-type': 'application/json'},
            body: JSON.stringify({
                contact: {
                    email: {inputEmail},
                    firstName: 'John',
                    lastName: 'Doe',
                    phone: '7223224241'
                }
            })
        };
        
        fetch('https://nicolasricardi.api-us1.com/api/3/contacts', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        e.preventDefault();
    }


    return(
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row">
                <input type="email" value={inputEmail} onChange={handleChange} required placeholder="La tua miglior email" className="bg-zinc-800 px-3 py-3 text-gray-200 block rounded-l-md outline-none w-3/5 border-[1px] border-white font-light" />
                <button type="submit" className="block rounded-r-md bg-white text-black px-4 font-bold w-2/5">Invia la checklist</button>
            </div>
        </form>
    )
}

export default NewsletterForm
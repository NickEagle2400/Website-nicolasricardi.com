import { useState } from "react";

const NewsletterForm = () => {

  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  }
  const handleNameChange = (e) => {
    setInputName(e.target.value);
  }

  return (
    <form method="POST" action={process.env.ACTIVECAMPAIGN_URL_FORM} id="_form_1_" noValidate>
      <input type="hidden" name="u" value="1" />
      <input type="hidden" name="f" value="1" />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />
      <input type="hidden" name="or" value="d14622a2a8148b9cbe10cce53da6e6ac" />

      <div className="_form-content">

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2" >
              <input type="text" value={inputName} onChange={handleNameChange} id="fullname" name="fullname" placeholder="Nome" required className="bg-zinc-800 px-4 py-3 lg:py-2 text-gray-200 block rounded outline-none border-[2px] border-transparent w-full font-light focus:border-zinc-600" />
          </div>
          <div className="w-full lg:w-1/2" >
              <input type="text" value={inputEmail} onChange={handleEmailChange} id="email" name="email" placeholder="La tua miglior email" required className="bg-zinc-800 px-4 py-3 lg:py-2 text-gray-200 block rounded outline-none border-[2px] border-transparent w-full font-light focus:border-zinc-600" />
          </div>
        </div>

        <div className="mt-6">
          <button id="_form_1_submit" className="w-full bg-white py-3 rounded font-medium transition-transform duration-200 hover:scale-105" type="submit">
            Si, voglio ricereve la Checklist gratuita
          </button>
        </div>

      </div>
    </form>
  )
}

export default NewsletterForm


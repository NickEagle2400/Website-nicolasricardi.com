import Image from 'next/image'
import { StandardLayout } from '../../layout'
import { Contact } from '../../components'


const ContactPage = () => {
    return (
        <StandardLayout pageTitle="Blog - Nicolas Ricardi">
            <Contact />
        </StandardLayout>
    )
}

export default ContactPage
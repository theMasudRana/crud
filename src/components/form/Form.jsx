import { useRef } from 'react'
import UiInput from './UiInput'
function Form({ onAddContact }) {

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const companyRef = useRef(null);
    const websiteRef = useRef(null);

    const handelSubmit = (event) => {
        event.preventDefault()

        const firstName = firstNameRef.current?.value
        const lastName = lastNameRef.current?.value
        const phone = phoneRef.current?.value
        const email = emailRef.current?.value
        const company = companyRef.current?.value
        const website = websiteRef.current?.value

        const contactData = {
            firstName,
            lastName,
            phone,
            email,
            company,
            website
        }

        onAddContact(contactData)
    }



    return (
        <form onSubmit={handelSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <UiInput
                    label={'First Name'}
                    inputId={'first-name'}
                    placeholder={'First Name'}
                    type={'text'}
                    inputRef={firstNameRef}
                />
                <UiInput
                    label={'Last Name'}
                    inputId={'last-name'}
                    placeholder={'Last Name'}
                    type={'text'}
                    inputRef={lastNameRef}
                />
                <UiInput
                    label={'Phone Number'}
                    inputId={'phone-number'}
                    placeholder={'Phone Number'}
                    type={'number'}
                    inputRef={phoneRef}
                />
                <UiInput
                    label={'Email Address'}
                    inputId={'email'}
                    placeholder={'Email Address'}
                    type={'email'}
                    inputRef={emailRef}
                />
                <UiInput
                    label={'Company Name'}
                    inputId={'company-name'}
                    placeholder={'Company Name'}
                    type={'text'}
                    inputRef={companyRef}
                />

                <UiInput
                    label={'Website URL'}
                    inputId={'website'}
                    placeholder={'Website URL'}
                    type={'url'}
                    inputRef={websiteRef}
                />

            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Contact</button>
        </form>
    )
}

export default Form
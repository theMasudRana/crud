import { useRef } from 'react'
import api from '../../api/api'
import UiInput from './UiInput'
function Form() {

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const phoneRef = useRef(null)
    const emailRef = useRef(null)
    const companyRef = useRef(null)
    const websiteRef = useRef(null)

    const handelSubmit = (event) => {
        event.preventDefault()

        const contactData = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            phone: phoneRef.current?.value,
            email: emailRef.current?.value,
            company: companyRef.current?.value,
            website: websiteRef.current?.value
        }

        addContact(contactData)
    }


    const addContact = async (contactData) => {
        try {
            const response = await api.post('/contacts.json', contactData)

            if (response.status === 200) {
                firstNameRef.current.value = ''
                lastNameRef.current.value = ''
                phoneRef.current.value = ''
                emailRef.current.value = ''
                companyRef.current.value = ''
                websiteRef.current.value = ''
            }

        } catch (error) {
            console.log(error.message)
        }
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
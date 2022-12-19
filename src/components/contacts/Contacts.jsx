import { useContext, useEffect } from 'react'
import api from '../../api/api'
import ContactContext from '../../context/ContactContext'
import { createArrayOfObjects } from '../../helpers/action'
import AddContactLink from '../common/AddContactLink'
import ErrorMessage from '../common/ErrorMessage'
import Loader from '../common/Loader'
import Contact from './Contact'
import Form from '../form/Form'

function Contacts() {

    const { state, changeAppState } = useContext(ContactContext)
    const { isLoading, isError, errorMessage, contacts, component, currentContactId } = state;

    // Get all contacts
    const getContacts = async () => {
        try {
            const response = await api.get('/contacts.json')
            const data = response.data

            // Create object data into a array
            const contactsData = createArrayOfObjects(data)

            changeAppState('contacts', contactsData)
            changeAppState('isLoading', false)

        } catch (error) {
            changeAppState('isLoading', false)
            changeAppState('isError', true)
            changeAppState('errorMessage', error.message)
        }
    }

    // Show all contacts in the dom
    useEffect(() => {
        getContacts()
    }, [])

    // Show loading state before data fetching
    if (isLoading) {
        return <Loader />
    }

    // Show error message if any error happens
    if (isError) {
        return <ErrorMessage errorMessage={errorMessage} />
    }

    return (
        <div className='container mx-auto py-16 contacts-wrapper'>
            {component === 'contactList' ?
                contacts.length ? contacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        name={`${contact.firstName}  ${contact.lastName}`}
                        email={contact.email}
                        phone={contact.phone}
                        company={contact.company}
                        website={contact.website}
                        itemId={contact.id}
                    />
                )) : <AddContactLink />

                : null
            }
            {component === 'editForm' && (
                <Form contactId={currentContactId} />
            )}
        </div>
    )
}

export default Contacts
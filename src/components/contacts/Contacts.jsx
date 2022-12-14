import { useState, useEffect, useContext } from 'react'
import api from '../../api/api'
import ErrorMessage from '../common/ErrorMessage'
import Loader from '../common/Loader'
import Contact from './Contact'
import ContactContext from '../../context/ContactContext'

function Contacts() {

    const { state, changeAppState } = useContext(ContactContext)
    const { theme, isLoading, isError, errorMessage, contacts } = state;

    // Get all contacts
    const getContacts = async () => {
        try {
            const response = await api.get('/contacts.json')
            const data = response.data

            // Create object data into a array
            const contactsArray = []
            for (const index in data) {

                const contactItem = {
                    id: index,
                    ...data[index]
                }
                contactsArray.push(contactItem)
            }
            changeAppState('contacts', contactsArray)
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

    const deleteItem = () => {
        console.log('Item will be deleted');
    }

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
            {contacts.map((contact) => (
                <Contact
                    key={contact.id}
                    name={`${contact.firstName}  ${contact.lastName}`}
                    email={contact.email}
                    phone={contact.phone}
                    company={contact.company}
                    website={contact.website}
                    deleteHandler={deleteItem}
                />
            ))}
        </div>
    )
}

export default Contacts
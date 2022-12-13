import { useState, useEffect } from 'react'
import api from '../../api/api'
import ErrorMessage from '../common/ErrorMessage'
import Loader from '../common/Loader'
import Contact from './Contact'

function Contacts() {
    const [loading, setLoading] = useState(true)
    const [contacts, setContacts] = useState([])
    const [error, setError] = useState(false)

    // Get all contacts
    const getContacts = async () => {
        try {
            const response = await api.get('/contacts.json')
            const data = response.data

            // Create object data into a array
            const contactsArray = []
            for (const key in data) {
                const contactItem = {
                    id: key,
                    ...data[key]
                }
                contactsArray.push(contactItem)
            }

            setContacts(contactsArray)
            setLoading(false)

        } catch (error) {
            setError(error.message)
            setLoading(false)
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
    if (loading) {
        return <Loader />
    }

    // Show error message if any error happens
    if (error) {
        return <ErrorMessage error={error} />
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
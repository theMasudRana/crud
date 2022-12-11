
import { useState, useEffect } from 'react'
import api from '../../api/api'
import Contact from './Contact'

function Contacts() {
    const [loading, setLoading] = useState(true)
    const [contacts, setContacts] = useState([])
    const [error, setError] = useState(false)

    // Get all contacts
    const getContacts = async () => {
        try {
            const response = await api.get('/contacts')
            const data = response.data

            setContacts(data)
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

    // Show loading state before data fetching
    if (loading) {
        return (
            <div className="container mx-auto py-16 px-10 loading-wrapper">
                <p>Loading.....</p>
            </div>
        )
    }

    // Show error message if any error happens
    if (error) {
        return (
            <div className="container mx-auto py-16 px-10 loading-wrapper">
                <p>{error}</p>
            </div>
        )
    }

    return (
        <div className='container mx-auto py-16 contacts-wrapper'>
            {contacts.map((contact) => (
                <Contact
                    key={contact.id}
                    contactName={contact.name}
                    contactEmail={contact.email}
                />
            ))}
        </div>
    )
}

export default Contacts
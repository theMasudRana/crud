
import { useState, useEffect } from 'react'
import api from '../../api/contacts'

function Contacts() {
    const [loading, setLoading] = useState(true)
    const [contacts, setContacts] = useState()

    const getContacts = async () => {
        try {
            const response = await api.get('/contacts')
            const data = response.data
            setContacts(data)
            setLoading(false)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getContacts()
    }, [])

    if (loading) {
        return (
            <div className="loading-wrapper">
                <p>Loading</p>
            </div>
        )
    }

    return (
        <div className='contacts-wrapper'>
            {contacts.map((contact) => (
                <div className="contact-item" key={contact.id}>
                    <p>{contact.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Contacts
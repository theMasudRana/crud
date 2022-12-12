import React from 'react'
import api from '../api/api';
import Form from '../components/form/Form'


function NewContact() {

    const addContact = async (contactData) => {
        try {
            const response = await api.post('/contacts.json', contactData)
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='container mx-auto py-16'>
            <Form onAddContact={addContact} />
        </div>
    )
}

export default NewContact
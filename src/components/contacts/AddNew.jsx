import api from '../../api/api'
import Form from '../form/Form'


function AddNew() {

    const addContact = async (contactData) => {
        try {
            await api.post('/contacts.json', contactData)
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

export default AddNew
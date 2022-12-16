import { Link } from 'react-router-dom'

function AddContactLink() {
    return (
        <div>
            <h3 className='mb-4 text-xl capitalize font-medium'>You have not added any contact yet.</h3>
            <Link className='inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700' to='/new-contact'>Add Contact</Link>
        </div>
    )
}

export default AddContactLink
import { useReducer } from 'react'
import ContactContext from '../context/ContactContext'
import contactActions from '../reducer/actions'

import contactReducer from '../reducer/contactReducer'
import initialState from './store'

function ContactContextProvider(props) {

    const [state, dispatch] = useReducer(contactReducer, initialState)

    const value = {
        contacts: state.contacts,
        state: state,
        changeAppState: (name, value) => {
            dispatch({ type: contactActions.CHANGE_APP_STATE, name, value });
        },
        setEventData: (value) => {
            dispatch({ type: contactActions.CONTACT_ADDED, value })
        },

    }

    return (
        <ContactContext.Provider value={value}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider
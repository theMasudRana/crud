import actions from "./actions";

function contactReducer(state, action) {
    switch (action.type) {
        case actions.CONTACT_ADDED:
            return {
                ...state,
                contactData: action.value
            }
        case actions.CONTACT_UPDATED:
            return {
                ...state,
                [action.name]: action.value
            }
        case actions.CONTACT_DELETED:
            return {
                ...state,
                [action.name]: action.value
            }
        case actions.CHANGE_APP_STATE:
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return { ...state }
    }
}

export default contactReducer
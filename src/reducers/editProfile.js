import {EDIT_PROFILE, SET_CURRENT_INFO} from '../actions'

const initialState = {
    id: null,
    displayName: '',
    about: '',
    password: '',
    lastUpdated: Date.now()
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_INFO:
        return {
            ...state,
            id: action.payload.id,
            displayName: action.payload.displayName,
            about: action.payload.about,
            password: action.payload.password,
            lastUpdated: Date.now()
        }
        case EDIT_PROFILE:
        return {
            ...state,
            id: action.payload.id,
            displayName: action.payload.displayName,
            about: action.payload.about,
            // password: action.payload.password,
            lastUpdated: Date.now()
        }
        default:
        return state
    }
}

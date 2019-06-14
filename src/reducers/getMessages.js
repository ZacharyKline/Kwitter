import {
    GET_MESSAGES,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAILED
}from "../actions"
const initialState = {

    messages: []
};
// added GET_Messages file - Tamekia

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_Messages_Success:
            return{
                ...state,
                messages:[...state.messages, ...action.payload.messages]
            }
        default:
            return state;
    }
}
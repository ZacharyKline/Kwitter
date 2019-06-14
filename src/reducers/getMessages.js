import {
    GET_MESSAGES,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAILED
}from "../actions"
import {GET_USER_MESSAGES, GET_USER_MESSAGES_SUCCESS, GET_USER_MESSAGES_FAILED} from '../actions'

const initialState = {
    messages: [],
    getUserMessagesError: null,
    getUserMessagesLoading: false,
    userMessages: null
};
// added GET_Messages file - Tamekia

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_Messages_Success:
            return{
                ...state,
                messages:[...state.messages, ...action.payload.messages]
            }
        case GET_USER_MESSAGES:
        return {
          ...state,
          getUserMessagesLoading: true,
          getUserMessagesError: null
        };
      case GET_USER_MESSAGES_SUCCESS:
        return {
          ...state,
          userMessages: action.payload.messages,
          getUserMessagesLoading: false
        };
      case GET_USER_MESSAGES_FAILED:
        return {
          ...state,
          getUserMessagesError: action.payload,
          getUserMessagesLoading: false 
        } 
>>>>>>> src/reducers/getMessages.js
        default:
            return state;
    }
}

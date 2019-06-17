import { GET_MESSAGES_SUCCESS, DELETE_MESSAGE } from "../actions";
import {
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAILED
} from "../actions";

const initialState = {
  messages: [],
  getUserMessagesError: null,
  getUserMessagesLoading: false,
  userMessages: null
};
// added GET_Messages file - Tamekia

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload.messages]
      };
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
      };
    case DELETE_MESSAGE:
      const newUserMessages = state.userMessages.filter(message => {
        return message.id !== action.payload.id;
      });
      const newMessages = state.messages.filter(message => {
        return message.id !== action.payload.id;
      });
      return {
        ...state,
        userMessages: newUserMessages, messages: newMessages
      };
    
    default:
      return state;
  }
};

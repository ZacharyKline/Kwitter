import {
  MESSAGE_POST,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
  GET_MESSAGES_SUCCESS,
} from "../actions";

const initialState = {
  messages: [],
  message_success: false,
  message_fail: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return {
        messages: [...action.payload.messages],
        message_success: true,
        message_fail: false
      };
    case MESSAGE_SUCCESS:
      return {
        messages: [...action.payload.messages],
        message_success: true,
        message_fail: false
      };
    case MESSAGE_FAIL:
      return {
        messages: [...state.messages],
        message_success: false,
        message_fail: true
      };
    case MESSAGE_POST:
      const newMessage = { ...action.payload.message };
      return {
        ...state,
        messages: [newMessage, ...state.messages]
      };
    default:
      return state;
  }
};

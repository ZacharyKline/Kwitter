import {GET_USERS} from '../actions'

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload.users]
      }
    default:
      return state;
  }
};

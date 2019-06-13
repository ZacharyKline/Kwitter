import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from "../actions/getUsers";

const initialState = {
  usersList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state };
    case GET_USERS_SUCCESS:
      console.log(" reducer working");
      return {
        ...state,
        usersList: action.payload.users
      };
    case GET_USERS_FAIL:
      return { ...state };
    default:
      return state;
  }
};

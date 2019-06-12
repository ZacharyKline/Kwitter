import { domain, handleJsonResponse } from "../actions/constants";

export const GET_USERS = "GET_USERS";

export const getUsers = () => dispatch => {
  return fetch(`${domain}/users`)
    .then(handleJsonResponse)
    .then(data => {
      return dispatch({
        type: GET_USERS,
        payload: data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

export const MESSAGE_POST = "MESSAGE_POST";
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
export const MESSAGE_FAIL = "MESSAGE_FAIL";

const url = domain + "/messages";

const postMessage = messageData => dispatch => {
  dispatch({ type: MESSAGE_POST });
  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result);
      return dispatch({
        type: MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      console.warn(err.message);
      return Promise.reject(
        dispatch({ type: MESSAGE_FAIL, payload: err.message })
      );
    });
};

export const postMessageThenGoToUserProfile = messageData => dispatch => {
  return dispatch(postMessage(messageData)).then(() => dispatch(push("/")));
};

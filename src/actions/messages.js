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
  });
};

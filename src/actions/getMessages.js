import {domain, jsonHeaders, handleJsonResponse} from "./constants";

export const GET_MESSAGES = "GET_MESSAGES"
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS"
export const GET_MESSAGES_FAILED = "GET_MESSAGES_FAILED"

const url = domain + "/messages";
// added GET_Messages file - Tamekia
export const getMessages = () => dispatch => {
    dispatch({
        type: GET_MESSAGES
    })
    return fetch(url, {
        method: "GET",
        headers: jsonHeaders,
    })
    .then(handleJsonResponse)
    .then(result => {
        console.log(result)
        return dispatch({
            type: GET_MESSAGES_SUCCESS,
            payload: result
        })
    })
    .catch(err => {
        return Promise.reject(
            dispatch({type: GET_MESSAGES_FAILED, payload: err.message})
        )
    })
}


import {domain, jsonHeaders, handleJsonResponse} from "./constants";

export const GET_MESSAGES = "GET_MESSAGES"
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS"
export const GET_MESSAGES_FAILED = "GET_MESSAGES_FAILED"

const url = domain + "/messages";
// added GET_Messages file - Tamekia
// made changes to file (map through user info) to add functionality to show correct user not just the user that is signed in - Tamekia 

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
        const messagePromises = result.messages.map(message => {
            const userUrl = domain + "/users/" + message.userId
            return fetch(userUrl)
                .then (handleJsonResponse)
                .then (result => {
                    return {
                        ...message,
                        ...result.user
                    }
                })
        })
        Promise.all(messagePromises)
            .then (messages => {
                return dispatch({
                    type: GET_MESSAGES_SUCCESS,
                    payload: messages
                })
            })

        
    })
    .catch(err => {
        return Promise.reject(
            dispatch({type: GET_MESSAGES_FAILED, payload: err.message})
        )
    })
}


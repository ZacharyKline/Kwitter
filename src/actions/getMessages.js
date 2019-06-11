import {domain, jsonHeaders, handleJsonResponse} from "./constants";
import {push} from "connected-react-router";

export const GET_Messages = "Get_Messages"
export const GET_Messages_Success = "Get_Messages_Success"
export const GET_Messages_Failed = "Get_Messages_Failed"

const url = domain + "/messages";

const messagesGet = messageData => postIt => {
    postIt({
        type: GET_Messages
    })

    return fetch(url + "/messages", {
        // method: "GET",
        headers: jsonHeaders,
        // body: JSON.stringify(messageData)
    })
    .then(handleJsonResponse)
    .then(result => {
        return postIt({
            type: GET_Messages_Success,
            payload: result
        })
    })
    .catch(err => {
        return Promise.reject(
            postIt({type: GET_Messages_Failed, payload: err.message})
        )
    })
}

export const postToPage = messageData => postIt => {
    return postIt(messagesGet(messageData)).then(() => postIt(push("/message")))
}


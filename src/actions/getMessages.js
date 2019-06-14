import {domain, jsonHeaders, handleJsonResponse} from "./constants";

export const GET_MESSAGES = "GET_MESSAGES"
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS"
export const GET_MESSAGES_FAILED = "GET_MESSAGES_FAILED"
export const GET_USER_MESSAGES = "GET_USER_MESSAGES"
export const GET_USER_MESSAGES_SUCCESS = "GET_USER_MESSAGES_SUCCESS"
export const GET_USER_MESSAGES_FAILED = "GET_USER_MESSAGES_FAILED"
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'



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

export const getUserMessages = (limit = 100, offset = 0, userId) => dispatch => {
    dispatch({ type: GET_USER_MESSAGES });
  
    fetch(
      url +
        `?limit=${limit}&offset=${offset}` +
        (userId ? `&userId=${userId}` : "")
    )
      .then(handleJsonResponse)
      .then(result => {
        dispatch({
          type: userId ? GET_USER_MESSAGES_SUCCESS : GET_MESSAGES_SUCCESS,
          payload: result
        });
      })
      .catch(err => {
        return Promise.reject(
          dispatch({
            type: userId ? GET_USER_MESSAGES_FAILED : GET_MESSAGES_FAILED,
            payload: err
          })
        );
      });
  };

  export const getMessageById = (messageID) => dispatch => {
    return fetch(`${domain}/messages/${messageID}`)
    .then(handleJsonResponse)
    .then(data => {
        dispatch({
            type: UPDATE_MESSAGE,
            payload: data.message
        })
    })
}

  
export const getLoggedInUserMessages = () => (dispatch, getState) => {
    const id = getState().auth.login.id;
    dispatch(getUserMessages(100, 0, id))
}


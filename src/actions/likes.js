import { jsonHeaders, domain } from '../actions/constants'
import { getMessageById, getMessages } from '../actions/'

export const TOGGLE_LIKED = 'TOGGLE_LIKED'
// export const REMOVE_LIKE = 'REMOVE_LIKE'

const url = domain + '/likes/'

export const addLike = (messageID) => (dispatch, getState) => {
  const token = getState().auth.login.token

    return fetch(url, {
      method: "POST",
      headers: {
          ...jsonHeaders,
          Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
          messageId: messageID
      })
    })
}

export const toggleLike = (messageID, isUserMessages = false) => (dispatch, getState) => {
  const userId = getState().editProfile.id
  let message
  if(isUserMessages) {
    message = getState().getMessages.userMessages.find(message => message.id === messageID)
  } else {
    message = getState().messages.messages.find(message => message.id === messageID)
  }
  const like = message.likes.find(like => like.userId === userId)
  
  console.log(like)
  if (like) {
    dispatch(removeLike(like.id)).then(() => {
      dispatch(getMessageById(messageID));
    })
  } else {
    dispatch(addLike(messageID)).then(() => {
      dispatch(getMessageById(messageID));
    })
  }

  dispatch(getMessages())
}

export const removeLike = likeId => {
  return function(dispatch, getState){
      const token = getState().auth.login.token

      return fetch(url + likeId, {
        method: 'DELETE',
        headers: {
            Authorization: `bearer ${token}`,
            "Content-Type": "application/json"
        }
      })
  }
}

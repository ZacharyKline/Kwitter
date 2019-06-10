//TODO: toggle for like, counter for number of likes, heart or something
// import {domain, jsonHeaders} from '../actions/constants/index'

// const LIKE = 'LIKE';
// const UN_LIKE = 'UN_LIKE';

// const url = domain + '/like'

// const likePost = (messageId) => (dispatch, getState) => {
//     const token = getState().auth.login.token

//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             ...jsonHeaders, 
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({
//             messageId: messageId
//         })
//     })
// }

// const unLike = likeId => {
//     return function(dispatch, getState){
//         const token = getState().auth.login.token
    
//     return fetch (url + likeId, {
//         method: 'DELETE',
//         headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json"
//         }
//     })
//     }
// }

// const toggleLike = (messageId) => (dispatch, getState) => {
//     const userId = getState().currentUser.id
//     const message = getState().messages.message.find(message => message.id === messageId)
//     const like = message.likes.find(like => like.userId === userId)

//     if(like == true) {
//         dispatch(unLike(like.id))
//         .then(() => {
//             dispatch(getMessageById(messageId))
//         })
//     } else {
//         dispatch(likePost(messageId))
//         .then(() =>{
//             dispatch(getMessageById(messageId))
//         })
//     }
//     dispatch(getMessages())
// }
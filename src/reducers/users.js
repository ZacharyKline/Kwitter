import {GET_USERS, UPLOAD_PICTURE, UPLOAD_PICTURE_SUCCESS, UPLOAD_PICTURE_FAILURE} from '../actions'


const initialState = {
  users: [],
  uploadPictureError: null,
  uploadPictureLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload.users]
      }
      case UPLOAD_PICTURE:
      return {
        ...state,
        uploadPictureLoading: true,
        uploadPictureError: null
      }
      case UPLOAD_PICTURE_SUCCESS:
      return {
        ...state,
        uploadPictureLoading: false
      }
      case UPLOAD_PICTURE_FAILURE:
      return {
        ...state,
        uploadPictureError: action.payload
      }
    default:
      return state;
  }
};

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_Messages:
        case GET_Messages_Success:
        case GET_Messages_Failed:
        default:
            return state;
    }
}
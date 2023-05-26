const initialState = null;

const setOptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGEOPT":
            return action.payload;
        default:
            return state;
    }
};

export default setOptionsReducer;

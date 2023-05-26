const initialState = true;

const boolStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOOL":
            return action.payload;
        case "RESET":
            return (state = initialState);
        default:
            return state;
    }
};

export default boolStateReducer;

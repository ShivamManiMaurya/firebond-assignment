export const boolState = (bool) => {
    return {
        type: "BOOL",
        payload: bool,
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const changeOptions = (option) => {
    return {
        type: "CHANGEOPT",
        payload: option,
    };
};

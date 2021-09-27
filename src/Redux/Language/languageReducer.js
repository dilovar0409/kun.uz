const defaultState = "uzbek"

export const languageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_TO_UZ":
            state = action.payload;
            break;
        case "CHANGE_TO_RU":
            state = action.payload;
            break;
        case "CHANGE_TO_TJ":
            state = action.payload;
            break;
        default:
            state = state;
    }
    return state;
};
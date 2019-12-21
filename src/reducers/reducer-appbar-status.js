const APP_BAR = "APP_BAR";

const initial = {
    appBarStatus: false
};


const appBarStatus = (state = initial, action) => {
    switch (action.type) {
        case APP_BAR:
            return {
                ...state, appBarStatus: action.payload
            };
        default:
            return state;
    }
};

export const actionAppSwapStatus = (status) => {
    return {
        type: APP_BAR,
        payload: status
    };
};

export default appBarStatus;
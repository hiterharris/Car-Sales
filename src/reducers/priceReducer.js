const initialState = {
    additionalPrice: 0
}

export const priceReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};
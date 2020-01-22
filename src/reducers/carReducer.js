const initialState = {
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
      },
}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                },
            }
        case 'REMOVE_FEATURE':
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(car => car.id !== action.payload.id)
                }
            }
        default:
            return state;
    };
};
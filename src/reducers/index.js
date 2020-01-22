import {combineReducers} from 'redux';
import {priceReducer} from './priceReducer';
import {carReducer} from './carReducer';
import {featuresReducer} from './featuresReducer';

export default combineReducers({
    priceReducer,
    carReducer,
    featuresReducer
});
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import myReducer from './myReducer'

export default combineReducers({
    routerReducer,
    myReducer
});
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import pais from './pais';

const rootReducer = (history) => combineReducers({
    pais: pais,
    router: connectRouter(history),
})

export default rootReducer;
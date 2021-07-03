import { combineReducers } from 'redux';

import wordReducer from './wordReducer';


const rootReducer = combineReducers({
word: wordReducer
});

export default rootReducer;
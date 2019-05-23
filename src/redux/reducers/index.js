import { combineReducers } from "redux";
import languageReducer from './language.reducer';

const appReducers = combineReducers({
    languageReducer
});

export default appReducers;
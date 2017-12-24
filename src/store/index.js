import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// views
import Dashboard from './dashboard/';

export default combineReducers({
    // components commons
    Dashboard,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
});

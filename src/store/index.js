import { combineReducers } from 'redux';

// views
import Dashboard from './dashboard/';
import Bodega from './bodega/';


export default combineReducers({
    // components commons
    Dashboard,
    Bodega
});

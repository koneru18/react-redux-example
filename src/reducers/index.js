import { combineReducers } from 'redux';
// import cartItems from './cartReducer';
import login from './login.reducer';

const rootReducer = combineReducers({
    // cartItems
    login,
});

export default rootReducer;
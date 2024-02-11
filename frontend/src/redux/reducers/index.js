import { combineReducers } from 'redux';

import { auth } from './auth';

// Add other reducers here and ensure they are valid functions
const rootReducer = combineReducers({
	auth,
});

export default rootReducer;

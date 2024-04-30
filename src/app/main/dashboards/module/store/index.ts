import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';

/**
 * The Module dashboard reducer.
 */
const reducer = combineReducers({
	widgets
});

export default reducer;

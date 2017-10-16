"use strict"
import { combineReducers } from 'redux';

// IMPORT REDUCERS TO BE COMBINED
import { booksReducers } from './booksReducers';

// COMBINE THE REDUCERS
export default combineReducers ({
    books: booksReducers,
    
})
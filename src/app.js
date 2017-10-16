"use strict"
import { createStore } from 'redux';

// STEP 3 define the reducers
const reducer = function (state = [], action) {
    // if the action type is increment we will update the state, adding the payload
    // also have to set the initial value of ths state (= 0) or we wont be able to add any payload
    switch (action.type) {
        // case "INCREMENT":
        //     return state + action.payload;
        //     break;
        case "POST_BOOK":
        // never use push to concatonate b/c push is a mutable method and in Redux you should never mutate the state
        let books = state.concat(action.payload);
            return books;
            break;
    }
    return state;
}

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function () {
    console.log('Current state is: ', store.getState());
    // can look at just the price of an object in the payload from the getState()
    console.log('Current state is: ', store.getState()[1].price);
})

// STEP 2 create and dispatch actions
// type is a keyword in redux but payload you can call as w.e
// use the below to test the payload and state change
// store.dispatch({type: "INCREMENT", payload: 1});
/* 
for passing an object in the payload you will have to change the state assignation to an object {} in step 3 reducer function
and make the state = payload instead of + and change the console log from + to comma
*/
store.dispatch({
    type: "POST_BOOK", payload: [
        {
            id: 1,
            name: "first book object in the payload",
            title: "this is first book in payload array of objs..",
            price: 3
        },
        {
            id: 2,
            name: "second book object in the payload",
            title: "this is second book in payload array of objs..",
            price: 24.99
        }
    ]
});
// if you dispatch a third book object then the state will be over written by the third book
// but to append new data you will have to add the payload and concatonate them together
store.dispatch({
    type: "POST_BOOK", payload: [
        {
            id: 3,
            name: "third book object in the payload",
            title: "this is third book in payload objs..",
            price: 30.99
        }
    ]
});
"use strict"
import { createStore } from 'redux';

// STEP 3 define the reducers
const reducer = function (state = {}, action) {
    // if the action type is increment we will update the state, adding the payload
    // also have to set the initial value of ths state (= 0) or we wont be able to add any payload
    switch (action.type) {
        // case "INCREMENT":
        //     return state + action.payload;
        //     break;
        case "POST_BOOK":
        return state = action.payload;
        break;
    }
    return state;
}

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function () {
    console.log('Current state is: ' , store.getState());
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
    type: "POST_BOOK", payload: {
        id: 1,
        name: "object in the payload",
        title: "this is first payload..",
        price: 3
    }
});
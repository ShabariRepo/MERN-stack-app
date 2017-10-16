"use strict"
import { createStore } from 'redux';
import reducers from './reducers/index';

// STEP 1 create the store
const store = createStore(reducers);

store.subscribe(function () {
    console.log('Current state is: ', store.getState());
    // can look at just the price of an object in the payload from the getState()
    //console.log('Current state is: ', store.getState()[1].price);
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

// DELETE a book based on id
store.dispatch({
    type: "DELETE_BOOK",
    payload: { id: 1 }
})

// UPDATE a book details on Payload
store.dispatch({
    type: "UPDATE_BOOK",
    payload: {
        id: 2,
        title: "Updated Title"
    }
})

// CART ACTIONS
// DELETE a cart based on id
store.dispatch({
    type: "DELETE_CART",
    payload: { id: 1 }
})

// ADD to cart
store.dispatch({
    type: "ADD_TO_CART",
    payload: [{ id: 2 }]
})
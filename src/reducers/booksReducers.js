"use strict"
// BOOKS REDUCERS
export function booksReducers (state = { books: [] }, action) {
    // if the action type is increment we will update the state, adding the payload
    // also have to set the initial value of ths state (= 0) or we wont be able to add any payload
    switch (action.type) {
        // case "INCREMENT":
        //     return state + action.payload;
        //     break;
        case "POST_BOOK":
            // never use push to concatonate b/c push is a mutable method and in Redux you should never mutate the state
            //let books = state.books.concat(action.payload);
            // can also use the spread operator ...
            return { books: [...state.books, ...action.payload] };
            break;

        case "DELETE_BOOK":
            // create a copy of the current array of books
            const currentBooksArray = [...state.books];
            // determine at which index in books array is the book to delete
            const indexToDelete = currentBooksArray.findIndex(function (book) {
                return book.id === action.payload.id;
            }
            )

            // then use slice to remove the book from the state object at the specified index in the array
            return {
                books: [...currentBooksArray.slice(0, indexToDelete),
                ...currentBooksArray.slice(indexToDelete + 1)
                ]
            };
            break;
        
        case "UPDATE_BOOK":
        // create a copy of the current array of books
        const currentBookToUpdate = [...state.books];
        // determine the index in the books array to be updated
        const indexToUpdate = currentBookToUpdate.findIndex(
            function(book){
                return book.id === action.payload.id;
            }
        )
        // create new book object with the new values and with the same array index of the item we want to replace, to do thsi we use spread but can use concat too
        const newBookToUpdate = {
            ...currentBookToUpdate[indexToUpdate],
            title: action.payload.title
        }
        // this log shows what the new item has
        console.log("newBookToUpdate: ", newBookToUpdate);
        // use slice to remove the book at the specified index, replace with the new object and concatenate with the other items
        return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)] }
        break;
    }
    return state;
}
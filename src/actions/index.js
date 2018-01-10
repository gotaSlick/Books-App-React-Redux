export function selectBook(book) {
    //selectBook is an action creator, it needs to return an action,
    //an object with a type property.
    //Actions usually have 2 key-value pairs: a type(always) and a payload.
    //the type describes the purpose of the action
    //the payload is a piece of data that describes the conditions of the action that's being triggered.
    //Here the action described is a user selecting the book
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
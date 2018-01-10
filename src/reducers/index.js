import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'; 
import ActiveBook from './reducer_ActiveBook';

const rootReducer = combineReducers({
   books: BooksReducer, //the key 'books' is a piece of state, 
   //and the value is the reducer itself. we define here
   //our app's state, where the value was whatever gets returned
   //from the BooksReducer function (for ex: a list of objects)
   activeBook: ActiveBook 
});

export default rootReducer;

import React, { Component } from 'react'; 
import { connect } from 'react-redux'; // we just import the connect function
import { selectBook } from '../actions/index'; //imports the action creator
import { bindActionCreators } from 'redux';

class BookList extends Component {
renderList() {
    return this.props.books.map((book) => {
        return (
            //Have to add the property key cause it is a list, the key has to be unique, 
            // we'll assume that title is gonna be unique in the books list.
            <li 
                key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">{book.title}
            </li>
        );
    });
}

    render() {
//creats an <ul>, and then calls the function renderList() which will map over an 
//array of books and for each book in the array we create an <li> that contains the book's title.
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}
//We have to plug in the application's state into this component, get it into here by
//this.props.books. We have to connect two separate libraries: React and Redux.
//It's done with a separate library called ReactRedux.

//the purpose of this function is to take this application's state (our state contains 
//the array of books and the active book) as an argument and whatever gets returned in here
//will show up as props inside of BookList. Usually we return an object here and whatever 
//is contained within this obect is gonna be set equal to this.props of our component BookList.
// ex: if i return {asdf: 123} and console.log(this.props.asdf) it's gonna be '123'. so it
// shows up as props inside of our container.
// the argument state is equal to this.props
function mapStateToProps(state) {
    return {
        books: state.books //THIS IS THE CONNECTION BETWEEN REDUX AND REACT (state to container)
    };
}

//anything returned from this function will end up as props 
//on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result
    //should be passed to all of our reducers 
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//the connect function that we import at the bottom says: 
//take this component + take mapStateToProps and return a container. And that's what we wanna 
//export. Not the plain component BookList, but the container.
//mapDispatchToProps -> promote BookList from a component to a container - 
//it needs to know about this dispatch method, selectBook. make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 
// connect function takes the function (mapStateToProps) and the component, and produces
// a container. And container is a component that is aware of the state that is contained by Redux.
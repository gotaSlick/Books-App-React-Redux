import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        //initial check if this.props.book doesnt exist yet,
        //return a warm up message
        if (!this.props.book) {
            return <div>Select a book to get started</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook //active book reducer is creating
        //the ActiveBook piece of state
    };
}
export default connect(mapStateToProps)(BookDetail);

import React, { Component } from 'react';
import './bookList.css';
import Book from '../book/book';

class BookList extends Component {
  render() {
    const books = this.props.books.length > 0 
      ? this.props.books.map((book, i) => <Book key={i} {...book}/>)
      : <div className="BookList__message">{ this.props.noBookMessage }</div>
    return (
      <div className="BookList">{ books }</div>
    )
  }
}

BookList.defaultProps = {
  books: []
};

export default BookList;

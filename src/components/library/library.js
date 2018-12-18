import React, { Component } from 'react';
import './library.css';
import Search from '../search/search';
import BookList from '../bookList/bookList';


const API_KEY =  process.env.REACT_APP_BOOKS_API_KEY;

class Library extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books:[],
      total: 0,
      searchTerm: '',
      startIndex: 0,
      noBookMessage: 'Use the form above to search for books.',
      printType: "all",
      bookType:""
    };
  }

  setSearchTerm(searchTerm) {
    this.setState({
      searchTerm
    });
  }

  setPrintType(printType) {
    this.setState({
      printType
    });
  }

  setBookType(bookType) {
    this.setState({
      bookType
    });
  }

  performSearch() {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const params = [
      `q=${this.state.searchTerm}`,
      `key=${API_KEY}`,
      `startIndex=${this.state.startIndex}`,
      `printType=${this.state.printType}`
    ];
    if(this.state.bookType) {
      params.push(`filter=${this.state.bookType}`);
    }
    const query = params.join('&');
    const url = `${baseUrl}?${query}`;
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          books: data.items,
          total: data.totalItems
        });
      })
      .catch(err => {
        console.log('remember to fix this');
      });
  }

  render() {
    return (
      <div className="Library">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Search 
          onChange={term => this.setSearchTerm(term)} 
          onSubmit={() => this.performSearch()}
          onChangePrintType={type => this.setPrintType(type)}
          onChangeBookType={type => this.setBookType(type)}/>
        <BookList books={this.state.books} noBookMessage={this.state.noBookMessage}/>
      </div>
    )
  }
}

export default Library;
  
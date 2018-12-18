
  import React, { Component } from 'react';
  import './search.css';

  class Search extends Component {

    handleSubmit(e) {
      e.preventDefault();
      this.props.onSubmit();
    }

    render() {
      return (
        <>
        <div className="Search">
        
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="searchTerm">Search: </label>
          <input 
            type="text" 
            id="searchTerm" 
            value={this.props.searchTerm} 
            onChange={e => this.props.onChange(e.target.value)}/>
          <button type="submit">Search</button>
        </form>  
        </div>

        <div className="Filter">
          <form>
            <label htmlFor="bookType">Print Type: </label>
            <select id="printType" name="printType" onChange={e => this.props.onChangePrintType(e.target.value)}>
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
            </select>

            <label htmlFor="bookType">Book Type: </label>
            <select id="bookType" name="bookType" onChange={e => this.props.onChangeBookType(e.target.value)}>
              <option value="">No Filter</option>
              <option value="ebooks"> eBooks- All Google eBooks.</option>
              <option value="free-ebooks"> Free ebooks - Full text viewability.</option>
              <option value="full"> Full - Can view entire volume.</option>
              <option value="paid-ebooks"> Paid eBooks - eBooks with a price.</option>
              <option value="partial"> Partial - Parts of text available.</option>
            </select>
          </form>
        </div>

        </>
      )
    }
  }

  export default Search;
  
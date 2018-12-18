import React, { Component } from 'react';
import './book.css';

class Book extends Component {
  render() {

    const { volumeInfo:info, saleInfo: cost } = this.props;
    const authors = info.authors
      ? info.authors.map((author, i) => <span key={i} className="Book__author">{author}</span>)
      : "No Author Info";
    const price = cost.retailPrice 
      ? new Intl.NumberFormat('en-Us', { style: 'currency', currency: cost.retailPrice.currencyCode }).format(cost.retailPrice.amount)
      : "NOT FOR SALE";  

    const snippet = this.props.searchInfo
      ? this.props.searchInfo.textSnippet
      : "";  

    const image = info.imageLinks 
      ?  <img src={info.imageLinks.smallThumbnail} alt={info.title} />
      : <div className="Book__image">No Image Available</div>;

    return (
      <div className="Book">
        <h2>{info.title}</h2>
        <div className="Book__details">
          { image }    
          <div className="Book__info">
            <div>Author: { authors }</div>
            <div>Price: {price} </div>
            <p>{ snippet }</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Book;

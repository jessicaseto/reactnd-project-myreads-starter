import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

class MyReads extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              books={this.props.books}
              updateBookshelf={this.props.updateBookshelf}
              shelf='currentlyReading'
              shelfTitle='Currently Reading'
            />
            <Bookshelf
              books={this.props.books}
              updateBookshelf={this.props.updateBookshelf}
              shelf='wantToRead'
              shelfTitle='Want To Read'
            />
            <Bookshelf
              books={this.props.books}
              updateBookshelf={this.props.updateBookshelf}
              shelf='read'
              shelfTitle='Read'
            />
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="open-search-link"
          >Add a book</Link>
        </div>
      </div>
    );
  }
}

MyReads.propTypes = {
  books: PropTypes.array.isRequired
};

export default MyReads;

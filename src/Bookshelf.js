import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter((book) => (
                book.shelf === this.props.shelf
              ))
              .map((book) => (
                <li key={book.id}>
                  <Book book={book} updateBookshelf={this.props.updateBookshelf}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

Bookshelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired
};

export default Bookshelf;

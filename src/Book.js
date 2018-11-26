import React from 'react'
import ShelfControl from './ShelfControl'
import PropTypes from 'prop-types'

class Book extends React.Component {
  render() {
    const book = this.props.book;
    const bgImg = book.hasOwnProperty('imageLinks') ? `url(${book.imageLinks.smallThumbnail})` : 'url("http://via.placeholder.com/128x193?text=?")';

    return (
      <div className="book">
        <div className=" book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bgImg}}></div>
          <ShelfControl
            book={book}
            updateBookshelf={this.props.updateBookshelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.hasOwnProperty('authors') && (
            (book.authors.length > 1) ? (
              book.authors.join(', ')
            ) : (
              book.authors
            )
          )}
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default Book

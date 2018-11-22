import React from 'react'
import ShelfControl from './ShelfControl'

class Book extends React.Component {
  /* Method to update shelf on change in select element */
  changeShelf = (shelf) => {
    this.setState((state) => ({ shelf }));
  }

  render() {
    const book = this.props.book;
    const bgImg = book.hasOwnProperty('imageLinks') ? `url(${book.imageLinks.smallThumbnail})` : 'url("http://via.placeholder.com/128x193?text=?")';

    return (
      <div className="book">
        <div className=" book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bgImg}}></div>
          <ShelfControl
            onShelfChange={this.changeShelf}
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

export default Book

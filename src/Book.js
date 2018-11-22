import React from 'react'
import ShelfControl from './ShelfControl'

class Book extends React.Component {
  state = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
    shelf: 'none'
  };

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

import React from 'react'
import ShelfControl from './ShelfControl'

class Book extends React.Component {
  state = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
    shelfStatus: {
      currentlyReading: false,
      wantToRead: false,
      read: false,
      none: true
    }
  };

  render() {
    return (
      <li key={this.state.title}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.state.backgroundImage}}></div>
            <ShelfControl
              shelfStatus={this.state.shelfStatus}
            />
          </div>
          <div className="book-title">{this.state.title}</div>
          <div className="book-authors">{this.state.author}</div>
        </div>
      </li>
    );
  }
}

export default Book

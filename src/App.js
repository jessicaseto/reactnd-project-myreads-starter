import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelvedBooks: []
  };

  getShelvedBooks = () => {
    BooksAPI.getAll().then(
      (books) => {
        this.setState({shelvedBooks: books});
      }
    );
  }

  /* Function: updateBookshelf
   * Parameters: book(object), shelf(string)
   * Description: Calls BooksAPI.update(book, shelf) method and refreshes
   *              results in this.state.shelvedBooks as an array.
   */
  updateBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(this.getShelvedBooks)
      .catch((e) =>
        console.log(e)
      );
  }

  componentDidMount() {
    this.getShelvedBooks();
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <MyReads books={this.state.shelvedBooks} updateBookshelf={this.updateBookshelf}/>
          )}
        />
        <Route path="/search" render={() => (
            <SearchBooks books={this.state.shelvedBooks} updateBookshelf={this.updateBookshelf}/>
          )}
        />
      </div>
    )
  }
}

export default BooksApp

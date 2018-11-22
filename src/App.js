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

  updateBookshelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => (
      BooksAPI.getAll().then(
        (books) => {
          this.setState({shelvedBooks: books})
        }
      )
    )).catch((e) =>
      console.log(e)
    )
  }

  componentDidMount() {
    BooksAPI.getAll().then(
      (books) => {
        this.setState({shelvedBooks: books})
      }
    );
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

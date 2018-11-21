import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: ''
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <MyReads books={this.state.books}/>
          )}
        />
        <Route path="/search" render={() => (
            <SearchBooks books={this.state.books}/>
          )}
        />
      </div>
    )
  }
}

export default BooksApp

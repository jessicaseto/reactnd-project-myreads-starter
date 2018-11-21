import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <MyReads/>
          )}
        />
        <Route path="/search" render={() => (
            <SearchBooks/>
          )}
        />
      </div>
    )
  }
}

export default BooksApp

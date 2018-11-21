import React from 'react'
import { Route, Link } from 'react-router-dom'
import Book from './Book'
import SearchBooks from './SearchBooks'

class MyReads extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <Book/>
                  <Book/>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <Book/>
                  <Book/>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <Book/>
                  <Book/>
                  <Book/>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="open-search-link"
          >Add a book</Link>
        </div>
        <Route path="/search" render={() => (
            <SearchBooks/>
          )}
        />
      </div>
    );
  }
}

export default MyReads

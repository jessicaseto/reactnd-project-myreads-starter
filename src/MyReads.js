import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class MyReads extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf books={this.props.books} shelf='currentlyReading' shelfTitle='Currently Reading'/>
            <Bookshelf books={this.props.books} shelf='wantToRead' shelfTitle='Want To Read'/>
            <Bookshelf books={this.props.books} shelf='read' shelfTitle='Read'/>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="open-search-link"
          >Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MyReads

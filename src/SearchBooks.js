import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  state = {
    query: ''
  };

  updateQuery = (query) => {
    this.setState({query});
  }

  clearQuery = () => {
    this.setState({ query : '' });
  }

  render() {
    // Show books
    let showingBooks;
    if (this.state.query) {
      showingBooks = BooksAPI.search(this.state.query);
      console.log(showingBooks);
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={this.clearQuery}>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(event) => {
                this.updateQuery(event.target.value);
              }}
            />
            <div>{this.state.query}</div>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks

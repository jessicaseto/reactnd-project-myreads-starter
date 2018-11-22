import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  state = {
    query: '',
    searchedBooks: []
  };

  // Function to update the query in this.state
  updateQuery = (query) => {
    this.setState({query});
  }

  // Function to clear the query string and searchedBooks array in this.state
  clearQuery = () => {
    this.setState({ query : '', searchedBooks: [] });
  }

  /* Function: search
   * Parameters: query(string)
   * Description: Calls BooksAPI.search(query) method and adds results to
   *              this.state.searchedBooks as an array. If no results are
   *              returned from the query, the query is cleared.
   */
  search = (query) => {
    if (query) {
      BooksAPI.search(query).then((books) => {
        this.setState({ searchedBooks: books });
      }).catch((e) => (console.log(e)));
    } else {
      this.clearQuery();
    }
  }

  render() {
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
                this.search(event.target.value);
              }}
            />
            <div>{this.state.query}</div>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(this.state.searchedBooks.length > 0) ? (
              this.state.searchedBooks
                .filter((searchedBook) => this.props.books.map((shelvedBook) => {
                  if (searchedBook.id === shelvedBook.id) {
                    searchedBook.shelf = shelvedBook.shelf;
                  };
                  return searchedBook;
                })).map((book) => (
                  <li key={book.id}>
                    <Book book={book} updateBookshelf={this.props.updateBookshelf}/>
                  </li>
                ))
            ) : (
              (this.state.query) && (
                <div>
                  <p>Unfortunately, the query you made did not return any books! :(</p>
                </div>
              )
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks

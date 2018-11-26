import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
import {DebounceInput} from 'react-debounce-input';

class SearchBooks extends React.Component {
  state = {
    query: '',
    searchedBooks: []
  };

  /* Function: updateQuery
   * Parameters: query(string)
   * Description: Updates this.state.query to the query passed in.
   */
  updateQuery = (query) => {
    this.setState({query});
  }

  /* Function: clearQuery
   * Parameters: none
   * Description: Resets this.state to the original state.
   */
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
            <DebounceInput
              type="text"
              placeholder="Search by title or author"
              debounceTimeout={300}
              onChange={(event) => {
                this.updateQuery(event.target.value);
                this.search(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* Filters searchedBooks against shelvedBooks if at least one
                book is in the shelvedBooks array. Searched books that have
                an id matching a shelved book get updated to have a matching
                shelf to the shelved book.
            */}
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

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired
};

export default SearchBooks;

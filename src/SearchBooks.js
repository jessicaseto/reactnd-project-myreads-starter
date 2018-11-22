import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  state = {
    query: '',
    showingBooks: []
  };

  updateQuery = (query) => {
    this.setState({query});
  }

  clearQuery = () => {
    this.setState({ query : '' });
  }

  search = (query) => {
    BooksAPI.search(query).then((books) => {
      console.log(books);
      this.setState({ showingBooks: books });
    }).catch((e) => console.log(e));
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
                this.search(this.state.query);
              }}
            />
            <div>{this.state.query}</div>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.showingBooks && (
                this.state.showingBooks.map((book1) => (
                  <Book book={book1}/>
                )))
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks

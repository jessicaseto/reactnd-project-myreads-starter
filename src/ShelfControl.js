import React from 'react'
import PropTypes from 'prop-types'

class ShelfControl extends React.Component {
  /* Function: handleSelect
   * Parameters: event(event object)
   * Description: Handler for change in select element. Calls
   *              updateBookshelf(book, shelf) method passed by props to
   *              update the bookshelf of a book when changed.
   */
  handleSelect = (event) => {
    event.persist();
    this.props.updateBookshelf(this.props.book, event.target.value);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.handleSelect}
          value={this.props.book.shelf ? this.props.book.shelf : 'none'}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

ShelfControl.propTypes = {
  book: PropTypes.object.isRequired
}

export default ShelfControl

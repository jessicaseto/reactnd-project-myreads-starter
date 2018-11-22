import React from 'react'

class ShelfControl extends React.Component {
  handleSelect = (event) => {
    event.persist();
    this.props.onShelfChange(event.target.value);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleSelect} value={this.props.book.shelf}>
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

export default ShelfControl

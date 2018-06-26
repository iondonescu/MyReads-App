import React, {Component} from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom';

class BookList extends Component {
  render(){
    //rendering entire page with title and BookShelf.js content
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf />
        <div className="open-search">
          <Link to="/search">Add  a book</Link>
        </div>
      </div>
    )
  }
}
export default BookList

import React, {Component} from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {
  render(){
    //rendering entire page with title and BookShelf.js content
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf />
      </div>
    )
  }
}
export default BookList

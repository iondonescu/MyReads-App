import React,{ Component } from 'react'
import Book from './Book'


class Shelf extends Component {
  render(){
    const {title,books} = this.props
// rendering a shelf with EACH BOOK inside, book from Book,js
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book,key) =>( <Book key = {key} book={book} /> ))}
          </ol>
        </div>
      </div>
    )

  }
}

export default Shelf

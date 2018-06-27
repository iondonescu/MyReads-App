import React,{ Component } from 'react'
import Book from './Book'


class Shelf extends Component {

  render(){
    const {shelf,books,shelfChange} = this.props

// rendering a shelf with EACH BOOK inside, book from Book,js
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book) =>(
            <li key={book.title}>
              <Book  shelf={shelf} book={book} shelfChange={shelfChange}/>
              </li>
             ))}
          </ol>
        </div>
      </div>
    )

  }
}

export default Shelf

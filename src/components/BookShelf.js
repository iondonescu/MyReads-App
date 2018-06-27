import React, { Component } from 'react'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'

class BookShelf extends Component {
  state ={
    books:[]
  }
  // THIS FUNCTION CHANGES THE SHELF WHERE  A BOOK IS PUT

      shelfChange = (book, shelf) => {
        book.shelf = shelf
            BooksAPI.update(book, shelf).then( () => {
              this.setState({
                books: this.state.books.filter( (b) => b.id !== book.id).concat([book])})
            })
      }
  render(){
      let currentlyReading = [ ];
      let wantToRead = [ ];
      let read = [ ];
      const {books} = this.state
      books.forEach(book => {
    switch(book.shelf) {
        case 'currentlyReading':
            currentlyReading.push(book)
            break
        case 'wantToRead':
            wantToRead.push(book)
            break
        case 'read':
            read.push(book)
            break
        default:
            break
    }
})
      const shelfList = [
    {
        name: 'Currently Reading',
        books : currentlyReading
    },
    {
        name: 'Want To Read',
        books : wantToRead
    },
    {
        name: 'Read',
        books : read
    }
]
//rendering EACH SHELF with specific books from shelf.js
      return (
      <div className="list-books-content">
        <div>
        { shelfList.map((shelf,index) =>( <Shelf key={index} title={shelf.name} books = {shelf.books} shelfChange={this.shelfChange}/>))}
        </div>
      </div>

    )
  }
}
export default BookShelf

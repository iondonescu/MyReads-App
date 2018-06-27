import React, { Component } from 'react'
import Shelf from './Shelf'

class BookShelf extends Component {

  //rendering EACH SHELF with specific books from shelf.js
  render(){
    const {title,books,shelfChange}= this.props
    const shelfList = [
    {
      name: 'currentlyReading',
      title : 'Currently Reading'
    },
    {
      name: 'wantToRead',
      title :'Want To Read'
    },
    {
      name: 'read',
      title : 'Read'
    }
    ]

    console.log(books)
      return (
        <div className="list-books-content">
                {shelfList.map((shelf) => (
                    <div >
                        <Shelf
                            shelf={shelf}
                            books={books.filter( (book) => book.shelf === shelf.name)}
                            shelfChange={shelfChange}
                        />
                    </div>
                ))}
        </div>

    )
  }

}
export default BookShelf

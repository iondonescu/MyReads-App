import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {
  state = {
		books: []
	}

  componentDidMount() {
    BooksAPI.getAll().then( books => {
      this.setState({ books })
    })
  }
  //search by a title or an author

    onSearch = (event) => {
    if (event.target.value) {BooksAPI.search(event.target.value)
      .then(books => {this.setState({ books: books })
    })}
    //search results are not  shown when all of the text is deleted
      else {this.setState( { books: [] })}
      }

// implementing sort function of shelves - similar with BookList.js

shelfChange = (book, shelf) => {
  book.shelf = shelf
  //console.log(book.shelf)
      BooksAPI.update(book, shelf)
      .then( () => {
        this.setState({
          books: this.state.books.filter( (b) => b.id !== book.id).concat([book])})
      })


}

  render(){
  const {books}=this.state
  const {shelfChange}=this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
              <input type="text" onChange={this.onSearch}
                    placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          { books.map((book) => (
            <li key={book.id}>



              <Book book={book} shelfChange={shelfChange} />



            </li>
            )
          )
          }
          </ol>
        </div>
      </div>
    )
    }
  }
  export default BookSearch

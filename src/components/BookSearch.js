import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {
  state = {
		books: [],
    currentBooks:[]
	}

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

render(){
const {books}=this.state
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
            <input type="text"
                  placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        { books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
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

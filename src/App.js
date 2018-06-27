import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
state = {
  books: []
}

// load the books after the components mounted
componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

// function to handle the books' shelf change
shelfChange = (book, shelf) => {
  book.shelf = shelf
  console.log(book.shelf)

  BooksAPI.update(book, shelf).then( ()=> {
    this.setState({
      books: this.state.books.filter( (b) => b.id !== book.id).concat([ book ])})
  })

}

  render() {

    return (
      <div className="app">
      <Route exact path='/' render={() => (<BookList books={this.state.books} shelfChange ={this.shelfChange}/>)}/>
      <Route path='/search' render={() => (<BookSearch  books={this.state.books} shelfChange={this.shelfChange}/>)}/>
      </div>
    )
  }
}

export default BooksApp

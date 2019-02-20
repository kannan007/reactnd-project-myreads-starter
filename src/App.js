import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './components/BookList';
import SearchBooks from './components/SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  };

  setPage = setState => {
    this.setState(() => ({
      showSearchPage: setState,
    }));
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(currentState => ({
        books: books,
      }));
    });
  }

  render() {
    return (
      <div className="app">
        {/* {this.state.showSearchPage ? <SearchBooks /> : <BookList onSearch={this.setPage} />} */}
        <Route
          exact
          path="/"
          component={({ history }) => <BookList books={this.state.books} />}
        />
        <Route path="/searchbooks" component={() => <SearchBooks onSearch={this.setPage} />} />
      </div>
    );
  }
}

export default BooksApp;

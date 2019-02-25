import React from 'react';
import { Link } from 'react-router-dom';

class BookList extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book, i) =>
                    book.shelf === 'currentlyReading' ? (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})`,
                              }}
                            />
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf} onChange={event => this.props.onChangeShelf(event, book)}>
                                <option value="move" disabled>
                                  Move to...
                                </option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ) : null
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book, i) =>
                    book.shelf === 'wantToRead' ? (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})`,
                              }}
                            />
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf} onChange={event => this.props.onChangeShelf(event, book)}>
                                <option value="move" disabled >
                                  Move to...
                                </option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ) : null
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book, i) =>
                    book.shelf === 'read' ? (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})`,
                              }}
                            />
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf} onChange={event => this.props.onChangeShelf(event, book)}>
                                <option value="move" disabled>
                                  Move to...
                                </option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ) : null
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="open-search">
          <button onClick={() => this.props.onSearch(true)}>Add a book</button>
        </div> */}
        <Link className="open-search" to="/searchbooks">
          <button>Add a book</button>
        </Link>
      </div>
    );
  }
}

export default BookList;

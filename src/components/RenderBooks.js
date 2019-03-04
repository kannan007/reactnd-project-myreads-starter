import React from 'react';

function RenderBooks(props) {
  console.log(props);
  return (
    <ol className="books-grid">
      {props && props.books
        ? props.books.map((book, i) =>
            book.shelf === props.shelfType ? (
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
                      <select
                        defaultValue={book.shelf}
                        onChange={event => props.onChangeShelf(event, book)}
                      >
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
          )
        : null}
    </ol>
  );
}

export default RenderBooks;

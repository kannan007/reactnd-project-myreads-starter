import React from "react";
import { Link } from "react-router-dom";
import RenderBook from "./RenderBooks";

class BookList extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  state = {
    isRender: false
  };

  componentDidMount() {
    this.setState(() => ({
      isRender: true
    }));
    console.log(this.state);
  }

  render() {
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
                {this.state.isRender ? <RenderBook books={this.props.books} shelfType={'currentlyReading'} onChangeShelf={this.props.onChangeShelf} /> : null}
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                {this.state.isRender ? <RenderBook books={this.props.books} shelfType={'wantToRead'} onChangeShelf={this.props.onChangeShelf} /> : null}
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                {this.state.isRender ? <RenderBook books={this.props.books} shelfType={'read'} onChangeShelf={this.props.onChangeShelf} /> : null}
              </div>
            </div>
          </div>
        </div>
        <Link className="open-search" to="/searchbooks">
          <button>Add a book</button>
        </Link>
      </div>
    );
  }
}

export default BookList;

import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Button, CardImg} from 'reactstrap';
import { throws } from 'assert';

var books = [
  { imageSrc: "https://content.mycutegraphics.com/graphics/book/closed-book-clipart-book-clip-art.png", bookName: "Grahnt 1" },
  { imageSrc: "https://content.mycutegraphics.com/graphics/book/closed-book-clipart-book-clip-art.png", bookName: "grahant 2" },
  { imageSrc: "https://content.mycutegraphics.com/graphics/book/closed-book-clipart-book-clip-art.png", bookName: "Grahnt 1" },
  { imageSrc: "https://content.mycutegraphics.com/graphics/book/closed-book-clipart-book-clip-art.png", bookName: "grahant 2" }, { imageSrc: "https://content.mycutegraphics.com/graphics/book/closed-book-clipart-book-clip-art.png", bookName: "Grahnt 1" },
  { imageSrc: "https://content.mycutegraphics.com/graphics/book/closed-book-clipart-book-clip-art.png", bookName: "grahant 2" }

]

class Books extends Component {
  constructor(props) {
    super(props);
    this.thumbnail = this.thumbnail.bind(this);
  }

  thumbnail() {
    return books.map((book) => (<span className=" col-12 col-lg-4 mb-2">
      <Card>
        <CardImg top width="100%" src={book.imageSrc} alt="Card image cap" />
        <CardBody>
          <CardTitle>{book.bookName}</CardTitle>
          <Button>Download</Button>
        </CardBody>
      </Card>
    </span>))
  }

  render() {
    return (
      <div>
        <h1><b>Books</b></h1>
        <div className="container-fluid row">
          {this.thumbnail()}
        </div>
      </div>

    );
  }
}

export default Books;
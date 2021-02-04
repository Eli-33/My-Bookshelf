import React from "react";
import { Component } from "react";
import {Input, SubmitBtn} from '../../components/Search/Search';
// import Jumbotron from '../../components/Jumbotron/Jumbotron';
import API from '../../utils/api/api';
import ResultList from "../../components/ResultList/ResultList";
import { Col, Container } from "../../components/Grid/Grid";
import jwt_decode from 'jwt-decode';
// import "./style.css"


class SearchBooks extends Component {

  state = {
    books: [],
    search: ""
};
// Create function to search for books through Google API
searchBooks = () => {
  API.searchGoogleBooks(this.state.search)
      .then(res => {
          console.log("This is res.data", res.data.items)
          this.setState({
          books: res.data.items,
          search: ""
      })
    })
      .catch(err => console.log(err));
      
};

 // Create function to handle input data
 handleInputChange = event => {
  const {name, value} = event.target;
  this.setState({
      [name]: value
  });
};

// Create function to handle form data submission
handleFormSubmit = event => {
  event.preventDefault();
  this.searchBooks();
};

WantToRead = currentBook => {
  console.log("This is the current book", currentBook);
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        console.log(decoded);
  API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
      status: this.props.WantToRead,
      userId: decoded._id ,
  })
  .then(res => console.log("Successful POST to DB!", res))
  .catch(err => console.log("this is the error", err));
}

CurrentlyReading = currentBook => {
  console.log("This is the current book", currentBook);
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        console.log(decoded);
  API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
      status: this.props.CurrentlyReading,
      userId: decoded._id ,
  })
  .then(res => console.log("Successful POST to DB!", res))
  .catch(err => console.log("this is the error", err));
}

Read = currentBook => {
  console.log("This is the current book", currentBook);
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        console.log(decoded);
  API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
      status: this.props.Read,
      userId: decoded._id ,
  })
  .then(res => console.log("Successful POST to DB!", res))
  .catch(err => console.log("this is the error", err));
}

render() {
        return (
         <> 
         <Col size="md-10">
        <Container fluid>
                {/* <Jumbotron /> */}
                <form>
                    <h5>Search for a book and save it of interest.</h5>
                    <Input 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="e.g. Harry Potter"
                    />
                    <SubmitBtn onClick={this.handleFormSubmit}/>
                </form>
                
                {this.state.books.length ? (
                    <ResultList 
                    bookState={this.state.books}
                    WantToRead={this.WantToRead}
                    CurrentlyReading={this.CurrentlyReading} 
                    Read={this.Read}> 
                    </ResultList>
                ) :
                 (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>No results to display</p>
                    </div>
                )}
                
                </Container>
                </Col>  
</>

        );
};

}

export default SearchBooks;
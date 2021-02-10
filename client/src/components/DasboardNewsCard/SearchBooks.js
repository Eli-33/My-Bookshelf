import React from "react";
import { Component } from "react";
import {Input, SubmitBtn} from '../../components/Search/Search';
// import Jumbotron from '../../components/Jumbotron/Jumbotron';
import API from '../../utils/api/api';
import ResultList from "../../components/ResultList/ResultList";
import { Col, Container } from "../../components/Grid/Grid";
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
                    <ResultList bookState={this.state.books} />
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
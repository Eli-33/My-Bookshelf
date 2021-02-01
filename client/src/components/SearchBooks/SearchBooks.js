// import React from "react";
// import { Component } from "react";
// import {Input} from '../../components/Search/Search'
// import "./style.css"
// import { Jumbotron, Container, Col, Form, Button } from 'react-bootstrap';
// import API from '../../utils/api/api';
// import ResultList from "../../components/ResultListItem/ResultListItem";

// class SearchBooks extends Component {

//   state = {
//     books: [],
//     search: ""
// };
// // Create function to search for books through Google API
// searchBooks = () => {
//   API.searchGoogleBooks(this.state.search)
//       .then(res => {
//           console.log("This is res.data", res.data.items)
//           this.setState({
//           books: res.data.items,
//           search: ""
//       })
//     })
//       .catch(err => console.log(err));
      
// };

//  // Create function to handle input data
//  handleInputChange = event => {
//   const {name, value} = event.target;
//   this.setState({
//       [name]: value
//   });
// };

// // Create function to handle form data submission
// handleFormSubmit = event => {
//   event.preventDefault();
//   this.searchBooks();
// };

// saveGoogleBook = currentBook => {
//   console.log("This is the current book", currentBook);
//   API.saveBook({
//       id: currentBook.id,
//       title: currentBook.title,
//       authors: currentBook.authors,
//       description: currentBook.description,
//       image: currentBook.image,
//       link: currentBook.link
//   })
//   .then(res => console.log("Successful POST to DB!", res))
//   .catch(err => console.log("this is the error", err));
// }

// render() {
//         return (
//          <>   
//         <Jumbotron fluid className='text-light bg-white'>
//             <Container>
//             <h1>Search for Books!</h1>
//             <Form >
//             <Form.Row>
//               <Col xs={ 12 } md={ 8 }>
//                 <Input
//              value={this.state.search}
//              onChange={this.handleInputChange}
//              name="search"
//              placeholder="e.g. Harry Potter"
//                 />
//               </Col>
//               <Col xs={ 12 } md={ 4 }>
//                 <Button onClick={this.handleFormSubmit} type='submit' variant='success' size='lg'>
//                   Submit
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//             </Container>
//         </Jumbotron>

//    <Container>
//    {this.state.books.length ? (
//                     <ResultList 
//                     bookState={this.state.books}
//                     saveGoogleBook={this.saveGoogleBook}>
//                     </ResultList>
//                 ) : (
//                     <div>
//                         <hr/>
//                     <p style={{fontStyle: "italic"}}>No results to display</p>
//                     </div>
//                 )}
//       </Container>
// </>
//         );
// };

// }

// export default SearchBooks;
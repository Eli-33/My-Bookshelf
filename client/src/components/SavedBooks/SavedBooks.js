import React, { Component } from 'react'
import { Container } from "../../components/Grid/Grid";
import API from '../../utils/api/api';
import SavedList from "../../components/SavedList/SavedList";


class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        console.log("state is ", this.props.status);
        this.getBooks(this.props.status)
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getBooks = (bookStatus) => {
        API.getBooks(bookStatus)
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }


    render() {
        return (
            <div>
               
                <Container fluid>
              
                {this.state.savedBooks.length ? (
                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <h5>No results to display</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default Saved

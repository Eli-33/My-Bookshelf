import API from '../../utils/api/api';
import React, { Component } from 'react';

class SaveNotes extends Component {

    state = {
        savedNotes: []
    }

    componentDidMount = () => {
        console.log("state is ", this.props.status);
        this.getNote(this.props.status)
    }

    deleteNote = currentNote => {
        API.deleteNote( currentNote.id )
        .then(res => {
            console.log("You deleted this note:", res);
            this.getNotes();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getNotes = (noteTake) => {
        API.getNotes(noteTake)
        .then(res => {
            this.setState({
                savedNotes: res.data
            })
            console.log("This is the res from getNotes", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

   render() {
       return (
            <div>
           
              <Container fluid>
          
                {this.state.savedNotes.length ? (
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


export default SaveNotes

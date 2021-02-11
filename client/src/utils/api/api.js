import axios from "axios";

export default {
    // Retrieves Google books
        searchGoogleBooks: function(query) {
            return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        },
        // Saves book to the DB
        saveBook: function(bookData) {
            console.log({bookData});
            return axios.post("/api/books", bookData);
        },
        // Gets saved books from DB
        getBooks: function(bookState) {
            var URL = "/api/books"
            if(bookState){
                URL="/api/books?state=" + bookState 
            }
            return axios.get(URL);
        },
        // Gets book with the given ID
        getBook: function(id) {
            return axios.get("/api/books/" + id);
        },
        // Deletes book with the given ID
        deleteBook: function(id) {
            console.log("delete this id: ", id)
            return axios.delete("/api/books/" + id);
        },
// **************************************************************
        saveNote: function(noteData) {
            console.log({noteData});
            return axios.post("/api/Blog", noteData);
        },
        getNotes: function() {
            return axios.get("/Blog/all");
        },
         // Gets note with the given ID
        getNote: function(id) {
            return axios.get("/Blog/find/:id" + id);
        },
        // Deletes book with the given ID
        deleteNote: function(id) {
            console.log("delete this id: ", id)
            return axios.delete("/Blog/delete/:id" + id);
        },
  };

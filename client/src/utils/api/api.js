import axios from "axios";

export default {
    // Retrieves Google books
    searchGoogleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
        // Saves book to the DB
        saveBook: function(bookData) {
            return axios.post("/api/dashboard", bookData);
        },
        // Gets saved books from DB
        getBooks: function() {
            return axios.get("/api/other");
        },
        // Gets book with the given ID
        getBook: function(id) {
            return axios.get("/api/other/" + id);
        },
        // Deletes book with the given ID
        deleteBook: function(id) {
            return axios.delete("/api/other/" + id);
        }
  };

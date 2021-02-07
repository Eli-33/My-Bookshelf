import jwt_decode from 'jwt-decode';
import API from '../utils/api/api';

export const saveBook = (currentBook, status) => {
  console.log("This is the current book", currentBook);
    const token = localStorage.getItem('userToken');
    const decoded = jwt_decode(token);
    console.log(decoded);

    return API.saveBook({
        id: currentBook.id,
        title: currentBook.title,
        authors: currentBook.authors,
        description: currentBook.description,
        image: currentBook.image,
        link: currentBook.link,
        status: status,
        userId: decoded._id ,
    })
    .then(res => console.log("Successful POST to DB!", res))
    .catch(err => console.log("this is the error", err));
}

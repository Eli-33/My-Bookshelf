# LOST-IN-BOOKS
 designing and building an app by MERN, short for MongoDB Express React and Node.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Project Overview](#Project-Overview)
* [User Story](#User-Story)
* [Link to the App](#Link-to-the-App)
* [About this project](#About-this-project)
* [Files](#Files)
* [Screenshots](#Screenshots)
* [License](#License)
* [Acknowledgements](#Acknowledgements)
* [Issues](#Issues)
* [Authors](#Authors)
<br>

## Project Overview
This app allows **the user** to register 
<br>

## User Story
AS A Book lover
I WANT to be able to search a book by the title, authur, gener 
SO THAT I can save them in diffrent gategories and have access to them whenever I want.
<br>

## Link to the App
Please visit the <a href="https://github.com/Eli-33/My-Bookshelf">GitHub repository</a> for a copy of the code for this project and application.<br>
Please visit the <a href="https://secure-anchorage-87448.herokuapp.com/">Lost-In-Books</a>application, hosted on Heroku.
<br>

## About this project
### **How the app works**
This project uses front end and back end design to create an online bookshelf and online library. The homepage has options for the user to signup or login. When the signup link is clicked a form will appear for the user to enter:
* their first name
* last name
* email address
* password
<br>
Once the user has completed the signup form, they can login to the app which is specific to the user. 
The Landing page  allows:
* User to see about app card with animation as well as the contact me card with links.
The Library page allows:
* the user have access to a form to search for a book which can be by the title of the book or author and the gener
* The user will see 10 recommendations with the all information like image of the book cover, title of the book, the name of author or authours and a short synopsis of the consept of the book.
* the user can save the book in three categories (wanna read, currently reading, read)
The bookshelf page in sidebar alows the user to see 3 categories:
* In each gategory page the saved book with the same information like Image of the book cover, title, author's name and synopsis of the book there is a view button to read the book if the book it free.and they can remove the book when ever they want.
<br>
In the profile page inside of sidebar the user can see his/her name and email which he/she has loged in.

Lastly, the user can logout of the app and be returned to the landing page .
<br>
### **How the app was built** 
This app uses MongoDB, Node, Express, React and mongoose ORM render a CRUD (Create, Read, Update, Delete) application which has the ability to:
###
POST:
* add a new user to the database
* add a new book to the database(with their status)
###
GET: 
* getting the information from the database to verify a user's email and password as valid
* view a user ID and find the books which he/she had saved by collecting the information from the database and presenting it to the user
###
PUT:
* edit a saving and save the changes to the database 
###
DELETE:
* removing a book with the status from the specific userId from the database  
###
This app uses a MVC design pattern where Node and MongoDB are used to query and route data in the app. React is used to generate the front-end look using Bootstrap,Material UI, Google Fonts and Font Awesome to create the aesthetics.
<br>

### **Video of the app in use** 
* A recording of the app's functionality can be viewed [here]()*.
<br>

### **Tools**
* [Visual Studio Code](https://code.visualstudio.com/) - The editor of choice
* [GitHub](https://github.com/) to share the code
* [Travis CI](https://travis-ci.org/) to test the code
* [Heroku](https://www.heroku.com/) to host the site

* **Backend Technology:**
  * [MongoDB]()
  * [Express](https://www.npmjs.com/package/express)
  * [Express-Session](https://www.npmjs.com/package/express-session)
  * [Nodemon](https://www.npmjs.com/package/nodemon)
  * [Postman](https://www.postman.com/)
  * [passport](https://www.npmjs.com/package/passport)
  * [passport-local](https://www.npmjs.com/package/passport-local)
  * [bycrypt.js](https://www.npmjs.com/package/bcryptjs)
  * [eslint](https://www.npmjs.com/package/eslint)configurable linter tool
  
* **Frontend Technology:**
  * React
  * CSS
  * [Bootstrap](https://getbootstrap.com/)
  * Javascript
  * [jQuery](https://jquery.com/)
  * [day.js](https://day.js.org/en/)
  * [fullcalendar.io](https://fullcalendar.io/) 
<br>

## Screenshots and quick Walkthrough

#### **Walthrough of application**
![walkthrough-lost in books]()

To see a more indepth video of the app please click [here](#Video-of-the-app-in-use) to go up to **Video of the app in use** above.

#### **Screenshot of application**
#### **Landing Page** 
![landing-page]()

#### Information about Lost in books (underneath the landing page video)
![info]()

<br>

## Licence
- [MIT License](https://opensource.org/licenses/MIT)
<br>

## Issues
If you find an issue while using the app or have a request, log the issue or request [ here](https://github.com/Epanastatis2020/book-a-tutor/issues). These will be addressed in a future code update.
<br>
<hr>

## Authors
  * **ELAHE JAMSHIDI ARAGHI** <br>
    Contact information:
    elijam1608@gmail.com <br>
    GitHub link:
    [Eli-33](https://github.com/Eli-33)
    



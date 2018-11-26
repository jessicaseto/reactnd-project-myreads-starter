# MyReads Project

The MyReads Project is a book reading app that is part of the Udacity Front End Nanodegree Program. The purpose of the project is to create a dynamic and responsive web application with the use of React.

## Installation

To access the application:
* In a bash terminal, run `git clone https://github.com/jessicaseto/reactnd-project-myreads-starter.git`
* install all project dependencies with `npm install`
* start the development server with `npm start` to view the app

## Usage

Once the app is running on the local server, you should be able to see the main page, as shown in the screenshot below.
![Main Page](/img/myreads.jpg?raw=true "Main Page")

Browse through the three bookshelves, "Currently Reading", "Want to Read", and "Read". You may change which shelf a book belongs in by changing the select option in the select menu on a particular book.

![Shelf Select](/img/shelfselect.jpg?raw=true "Shelf Select")

Finally, to add new books to the bookshelf, you can reach the search page by clicking on the (+) at the bottom right corner of the app. The search page should appear as shown in the screenshot below. Note that the screenshot shows a search of "art". You can change the search query by typing into the input box.

![Search Page](/img/search.jpg?raw=true "Search Page")

## Source File Directory Guide
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for the app.
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. (Unused for now)
    ├── Book.js # Book component, used to render a book object.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── Bookshelf.js # Bookshelf component, used to render a specific bookshelf to the MyReads main page.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── MyReads.js # MyReads component, used to render the main page that displays the three bookshelves.
    ├── SearchBooks.js # SearchBooks component, used to render the search page that displays searched books.
    └── ShelfControl.js # ShelfControl component, used to render the bookshelf select menu on each book component.
```

## Search Terms

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend. Books can also be searched by title or author.

## Udacity Project

The starter project was forked from [udacity/reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter). See the original project for more information.

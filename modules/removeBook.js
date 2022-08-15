import storageAvailable from './storageAvailable.js';
import updateStorage from './updateStorage.js';
import populateBook from './populateBook.js';

const removeBook = (event) => {
  let bookList = [];

  if (storageAvailable('localStorage')) {
    const { localStorage } = window;
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }

  const bookDiv = document.getElementsByClassName('book-list')[0];
  const objectId = event.target.id;

  const newBookList = bookList.filter((book) => book.Title !== bookList[objectId].Title);

  bookList = newBookList;

  bookDiv.innerText = '';
  updateStorage(bookList);
  populateBook();
};

export default removeBook;
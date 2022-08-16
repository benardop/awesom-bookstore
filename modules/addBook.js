import updateStorage from './updateStorage.js';
import storageAvailable from './storageAvailable.js';
import appendToBook from './appendToBook.js';

const addBook = () => {
  let bookList = [];

  if (storageAvailable('localStorage')) {
    const { localStorage } = window;
    bookList = JSON.parse(localStorage.getItem('bookList'));

    if ((bookList === null) || (bookList === undefined)) {
      bookList = [];
    }
  }

  const bookTitle = document.getElementsByClassName('book-title')[0];
  const author = document.getElementsByClassName('author')[0];

  if (bookTitle.value !== '' || author.value !== '') {
    bookList.push({
      Title: bookTitle.value,
      Author: author.value,
    });

    bookTitle.value = '';
    author.value = '';

    appendToBook(bookList);
    updateStorage(bookList);
  }
};

export default addBook;
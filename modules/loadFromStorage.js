import storageAvailable from './storageAvailable.js';
import populateBook from './populateBook.js';

const loadFromStorage = () => {
  if (storageAvailable('localStorage')) {
    const { localStorage } = window;
    const bookData = JSON.parse(localStorage.getItem('bookList'));
    if (bookData !== null) {
      populateBook();
    }
  }
};

export default loadFromStorage;
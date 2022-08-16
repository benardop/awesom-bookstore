import storageAvailable from './storageAvailable.js';

const updateStorage = (bookList) => {
  if (storageAvailable('localStorage')) {
    const { localStorage } = window;
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }
};

export default updateStorage;
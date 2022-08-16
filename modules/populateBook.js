import storageAvailable from './storageAvailable.js';

const populateBook = () => {
  const bookDiv = document.getElementsByClassName('book-list')[0];

  let bookList = [];

  if (storageAvailable('localStorage')) {
    const { localStorage } = window;
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }

  bookList.forEach((book, index) => {
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';

    const bookDetails = document.createElement('p');
    bookDetails.className = 'book-details';
    bookDetails.innerHTML = `&#34;${book.Title}&#34; by ${book.Author}`;

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.id = index;
    removeButton.innerText = 'Remove';

    bookContainer.appendChild(bookDetails);
    bookContainer.appendChild(removeButton);
    bookDiv.appendChild(bookContainer);
  });
};

export default populateBook;
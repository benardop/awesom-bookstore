const appendToBook = (bookList) => {
  const lastBookIndex = bookList.length - 1;
  const bookDiv = document.getElementsByClassName('book-list')[0];

  const bookContainer = document.createElement('div');
  bookContainer.className = 'book-container';

  const bookDetails = document.createElement('p');
  bookDetails.className = 'book-details';
  bookDetails.innerHTML = `&#34;${bookList[lastBookIndex].Title}&#34; by ${bookList[lastBookIndex].Author}`;

  const removeButton = document.createElement('button');
  removeButton.className = 'remove-button';
  removeButton.id = lastBookIndex;
  removeButton.innerText = 'Remove';

  bookContainer.appendChild(bookDetails);
  bookContainer.appendChild(removeButton);
  bookDiv.appendChild(bookContainer);
};

export default appendToBook;
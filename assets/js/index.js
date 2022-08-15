class Book {
    constructor(bookList = []) {
      this.bookList = bookList;
    }
  
    populateBook() {
      const bookDiv = document.getElementsByClassName('book-list')[0];
      this.bookList.forEach((book, index) => {
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
    }

    appendToBook() {
        const lastBookIndex = this.bookList.length - 1;
        const bookDiv = document.getElementsByClassName('book-list')[0];
    
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-container';
    
        const bookDetails = document.createElement('p');
        bookDetails.className = 'book-details';
        bookDetails.innerHTML = `&#34;${this.bookList[lastBookIndex].Title}&#34; by ${this.bookList[lastBookIndex].Author}`;
    
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.id = lastBookIndex;
        removeButton.innerText = 'Remove';
    
        bookContainer.appendChild(bookDetails);
        bookContainer.appendChild(removeButton);
        bookDiv.appendChild(bookContainer);
    }

    removeBook(event) {
        const bookDiv = document.getElementsByClassName('book-list')[0];
        const objectId = event.target.id;
    
        const newBookList = this.bookList.filter((book) => book.Title !== this.bookList[objectId].Title);
    
        this.bookList = newBookList;
    
        bookDiv.innerText = '';
        this.updateStorage();
        this.populateBook();
    }

    updateStorage() {
        if (this.storageAvailable('localStorage')) {
          const { localStorage } = window;
          localStorage.setItem('bookList', JSON.stringify(this.bookList));
        }
    }

    loadFromStorage() {
        if (this.storageAvailable('localStorage')) {
          const { localStorage } = window;
          const bookData = JSON.parse(localStorage.getItem('bookList'));
          if (this.bookData !== null) {
            this.bookList = bookData;
            this.populateBook();
          }
        }
    }

    storageAvailable(type) {
        let storage;
        try {
          this.storage = window[type];
          const x = '__storage_test__';
          this.storage.setItem(x, x);
          this.storage.removeItem(x);
          return true;
        } catch (event) {
          return event instanceof DOMException && (event.code === 22 || event.code === 1014 || event.name === 'QuotaExceededError' || event.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
        }
    }

    addBook() {
        const bookTitle = document.getElementsByClassName('book-title')[0];
        const author = document.getElementsByClassName('author')[0];
    
        if (bookTitle.value === '' || author.value === '') {
          // eslint-disable-next-line no-alert
          alert('Please make sure to fill both Title & Author fields!');
        } else {
          this.bookList.push({
            Title: bookTitle.value,
            Author: author.value,
          });
    
          bookTitle.value = '';
          author.value = '';
    
          this.appendToBook();
          this.updateStorage();
        }
    }
}

const BookItem = new Book();

window.onclick = function (event) {
  if (event.target.className === 'add-button') {
    BookItem.addBook();
  } else if (event.target.className === 'remove-button') {
    BookItem.removeBook(event);
  }
};

window.onload = function () {
  if (JSON.parse(localStorage.getItem('bookList')) === null) {
    BookItem.updateStorage();
  } else {
    BookItem.loadFromStorage();
  }
};
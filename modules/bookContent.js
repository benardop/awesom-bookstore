const bookCollection = document.querySelector('.book-collection');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const addButton = document.querySelector('#addButton');

let id = 1 || JSON.parse(localStorage.getItem('maxID'));

// Book class
class BookObject {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static displayBooks = () => {
    bookCollection.innerHTML = '';
    id = JSON.parse(localStorage.getItem('maxID'));
    const keys = Object.keys(localStorage);
    keys.forEach((element) => {
      if (element === 'maxID') {
        return;
      }
      const getBook = JSON.parse(localStorage.getItem(element));
      this.createBookElements(getBook.title, getBook.author, element);
    });
  }

  static addBook = (title, author, id) => {
    this.createBookElements(title, author, id);
  }

  static createBookElements = (title, author, id) => {
    const removeButton = [];
    const div = [];
    div[id] = document.createElement('div');
    div[id].setAttribute('id', id);

    const paragraphText = document.createElement('p');
    paragraphText.textContent = `"${title}" by ${author}`;

    removeButton[id] = document.createElement('button');
    removeButton[id].setAttribute('id', id);
    removeButton[id].textContent = 'Remove';
    removeButton[id].addEventListener('click', (e) => {
      const key = e.target.id;
      div[e.target.id].remove();
      localStorage.removeItem(key);

      if (bookCollection.innerHTML === '') {
        bookCollection.style.border = 'none';
      }
    });
    div[id].append(paragraphText, removeButton[id]);
    bookCollection.appendChild(div[id]);
    bookCollection.style.border = '2px solid #000';
  }

   static storeLocalStorage = (book, id) => {
     localStorage.setItem(id, JSON.stringify(book));
   }

   static clearInputs = () => {
     document.querySelector('#book-title').value = '';
     document.querySelector('#book-author').value = '';
   }
}

// add button clieck event
addButton.addEventListener('click', () => {
  if (title.value === '' || author.value === '') {
    // eslint-disable-next-line no-alert
    alert('This field cannot be empty');
  } else {
    BookObject.addBook(title.value, author.value, id);
    const book = new BookObject(title.value, author.value, id);
    BookObject.storeLocalStorage(book, id);
    id += 1;
    localStorage.setItem('maxID', id);
    BookObject.clearInputs();
  }
});

window.onload = () => {
  BookObject.displayBooks();
  if (bookCollection.innerHTML === '') {
    bookCollection.style.border = 'none';
  }
};
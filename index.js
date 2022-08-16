import addBook from './modules/addBook.js';
import navigateContact from './modules/navigateContact.js';
import loadFromStorage from './modules/loadFromStorage.js';
import navigateList from './modules/navigateList.js';
import navigateAddNew from './modules/navigateAddNew.js';
import updateStorage from './modules/updateStorage.js';
import removeBook from './modules/removeBook.js';
import { DateTime } from './modules/luxon.js';

const list = document.getElementById('list-link');
const addNew = document.getElementById('add-new-link');
const contact = document.getElementById('contact-link');

const sectionList = document.getElementsByClassName('list')[0];
const sectionAddBook = document.getElementsByClassName('add-book')[0];
const sectionContact = document.getElementsByClassName('contact')[0];

// Add click-event for the navigation links
list.onclick = () => {
  navigateList(list, sectionList, addNew, sectionAddBook, contact, sectionContact);
};

addNew.onclick = () => {
  navigateAddNew(list, sectionList, addNew, sectionAddBook, contact, sectionContact);
};

contact.onclick = () => {
  navigateContact(list, sectionList, addNew, sectionAddBook, contact, sectionContact);
};

// get time and date
document.getElementsByClassName('date')[0].innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);

// Call function events
window.onclick = (event) => {
  if (event.target.className === 'add-button') {
    addBook();
  } else if (event.target.className === 'remove-button') {
    removeBook(event);
  }
};

window.onload = () => {
  let bookList = window.localStorage.getItem('bookList');

  if ((bookList === null) || (bookList === undefined)) {
    bookList = [];
    updateStorage(bookList);
  } else {
    loadFromStorage();
  }
};

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
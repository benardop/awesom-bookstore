const list = document.getElementById('list-link');
const addNew = document.getElementById('add-new-link');
const contact = document.getElementById('contact-link');

const sectionList = document.getElementsByClassName('list')[0];
const sectionAddBook = document.getElementsByClassName('add-book')[0];
const sectionContact = document.getElementsByClassName('contact')[0];

function navigateList() {
  sectionList.style.display = 'block';
  list.className = 'nav-link active';
  sectionAddBook.style.display = 'none';
  addNew.className = 'nav-link';
  sectionContact.style.display = 'none';
  contact.className = 'nav-link';
}

function navigateAddNew() {
  sectionList.style.display = 'none';
  list.className = 'nav-link';
  sectionAddBook.style.display = 'block';
  addNew.className = 'nav-link active';
  sectionContact.style.display = 'none';
  contact.className = 'nav-link';
}

function navigateContact() {
  sectionList.style.display = 'none';
  list.className = 'nav-link';
  sectionAddBook.style.display = 'none';
  addNew.className = 'nav-link';
  sectionContact.style.display = 'block';
  contact.className = 'nav-link active';
}

list.onclick = function () {
  navigateList();
};

addNew.onclick = function () {
  navigateAddNew();
};

contact.onclick = function () {
  navigateContact();
};
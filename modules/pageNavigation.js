const listButton = document.querySelector('#list-link');
const addNewButton = document.querySelector('#add-new-link');
const contactButton = document.querySelector('#contact-link');

const listSection = document.querySelector('.list');
const addSection = document.querySelector('.addNewBook');
const contactSection = document.querySelector('.contact');

// List event listener
listButton.addEventListener('click', () => {
  listButton.classList.add('active');
  addNewButton.classList.remove('active');
  contactButton.classList.remove('active');
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// add event listener
addNewButton.addEventListener('click', () => {
  listButton.classList.remove('active');
  addNewButton.classList.add('active');
  contactButton.classList.remove('active');
  listSection.style.display = 'none';
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
});

// contact event listener
contactButton.addEventListener('click', () => {
  listButton.classList.remove('active');
  addNewButton.classList.remove('active');
  contactButton.classList.add('active');
  listSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
});
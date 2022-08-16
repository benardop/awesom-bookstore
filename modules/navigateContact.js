const navigateAddNew = (list, sectionList, addNew, sectionAddBook, contact, sectionContact) => {
  sectionList.style.display = 'none';
  list.className = 'nav-link';
  sectionAddBook.style.display = 'block';
  addNew.className = 'nav-link active';
  sectionContact.style.display = 'none';
  contact.className = 'nav-link';
};

export default navigateAddNew;
const navigateList = (list, sectionList, addNew, sectionAddBook, contact, sectionContact) => {
  sectionList.style.display = 'block';
  list.className = 'nav-link active';
  sectionAddBook.style.display = 'none';
  addNew.className = 'nav-link';
  sectionContact.style.display = 'none';
  contact.className = 'nav-link';
};

export default navigateList;
const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (event) {
    return event instanceof DOMException && (event.code === 22 || event.code === 1014 || event.name === 'QuotaExceededError' || event.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
};

export default storageAvailable;
import displayDate from './modules/displayDate.js';
import './modules/pageNavigation.js';
import './modules/bookContent.js';

// // get time and date

setInterval(() => {
  document.getElementById('date').innerHTML = displayDate();
}, 1000);
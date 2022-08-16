const displayDate = () => {
  const dateTime = new Date();
  document.getElementsByClassName('date').innerHTML = dateTime;
};

export default displayDate();
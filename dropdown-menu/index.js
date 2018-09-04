const dropdownButton = document.getElementsByClassName('wrapper-dropdown')[0];
dropdownButton.onclick = function () {
  this.classList.toggle('active');
  console.log(dropdownButton);
  console.log('hello')
}

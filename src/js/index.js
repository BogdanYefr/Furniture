const iqon = document.querySelector('.header--icon_group');
const centrlBl = document.querySelector('.section_first--central_block');
const discrBl = document.querySelector('.section_first--description_block');
const openPopup = document.querySelector('.popup');
const body = document.body;

document.querySelector('.hamburger').addEventListener('click', function(e){
  e.preventDefault();
  this.classList.toggle('is-active');
  iqon.classList.toggle('iqon_active');
  centrlBl.classList.toggle('burger-active');
  discrBl.classList.toggle('burger-active');
  openPopup.classList.toggle('open')
  body.classList.toggle('noscroll')
});




  

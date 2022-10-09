const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item = document.querySelectorAll('.header .navbar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'salmon';
});

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'salmon';
});

const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'salmon';
});

const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'salmon';
});

const btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'salmon';
});

const btn6 = document.getElementById('btn6');

btn6.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'salmon';
});

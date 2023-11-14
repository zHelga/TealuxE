"use strict"

let headerSearch = document.querySelector('.active-header__search');

headerSearch.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();
  headerSearch.classList.toggle('active-header__search_active');
})

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', (e)=> {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  document.querySelector('body').classList.toggle('hidden')
})
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('start');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('start');
})

loginBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
})


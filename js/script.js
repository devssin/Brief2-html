const nav = document.querySelector(".nav-links")
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')

const btnSearch = document.querySelector('.search')
const searchBar = document.querySelector('.search-bar')
const btnClose = document.querySelector('.btnClose');

burger.addEventListener('click' , () => {
    nav.classList.add('show')
})

close.addEventListener('click', () => {
    nav.classList.remove('show')

})

btnSearch.addEventListener('click', () => {
    searchBar.classList.add("open");
})

btnClose.addEventListener('click' , () =>{
    searchBar.classList.remove("open");
})
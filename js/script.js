const nav = document.querySelector(".nav-links")
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')


burger.addEventListener('click' , () => {
    nav.classList.add('show')
})

close.addEventListener('click', () => {
    nav.classList.remove('show')

})
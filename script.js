const nav = document.querySelector('nav')
const toggle = document.querySelector('.toggle')
const close = document.querySelector('.close')

toggle.addEventListener('click',()=>{
    nav.classList.add('open')
})
close.addEventListener('click',()=>{
    nav.classList.remove('open')
})
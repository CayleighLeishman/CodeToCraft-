
let menuButton = document.getElementById("menu-button")
let navLis =document.querySelector("nav ul")
menuButton.addEventListener('click',() => {
    menuButton.classList.toggle("open")
    navList.classList.toggle("open")
})
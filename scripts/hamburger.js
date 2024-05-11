let menu_button = document.getElementById("menu-button")
let navList = document.querySelector("nav ul")
menu_button.addEventListener('click',() => {
    menu_button.classList.toggle("open")
    navList.classList.toggle("open")
})
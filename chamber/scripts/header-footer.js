// // sets the current Year
// let year = new Date().getFullYear()
// let currentYearSpan = document.querySelector('#currentYear')
// currentYearSpan.innerHTML = `${year}`


//professor
let datespan =document.querySelector('#currentYear')
datespan.innertext = new Date().getFullYear()

let lastmodifiedspan = document.querySelector('#lastModified')
lastmodifiedspan.innerText = document.lastModified

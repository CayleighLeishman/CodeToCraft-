// sets the current Year

let year = new Date().getFullYear()
let currentYearSpan = document.querySelector('#currentYear')
currentYearSpan.innerHTML = `${year}`



// sets the last modified date

let lastModifiedParagraph = document.querySelector('#lastModified')
lastModifiedParagraph.innerHTML =`Last Modified: ${document.lastModified}`




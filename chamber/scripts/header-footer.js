// Date Stuff
let datespan =document.querySelector('#currentYear')
datespan.innertext = new Date().getFullYear()

let lastmodifiedspan = document.querySelector('#lastModified')
lastmodifiedspan.innerText = document.lastModified

  
  // // Navigation Hamburger
  let menu_button = document.getElementById("menu-button")
  let navList = document.querySelector("nav ul")
  menu_button.addEventListener('click',() => {
      menu_button.classList.toggle("open")
      navList.classList.toggle("open")
  })
  
  
// darkMode 
let darkbutton = document.getElementById("dark-mode")
darkbutton.addEventListener("click", () =>{    
    darkbutton.classList.toggle("dark")
    if (darkbutton.classList.contains("dark")){
        document.documentElement.style.setProperty('--text-color', 'white');        
        document.documentElement.style.setProperty('--inv-text-color', 'black');        
        document.documentElement.style.setProperty('--body-color', '478d73');    
        document.documentElement.style.setProperty('--card-color', '#32343e');   
        document.documentElement.style.setProperty('--grey-blue', '#404c54');    
        document.documentElement.style.setProperty('--nav-color', '#32343e');              
    }
    else{
        document.documentElement.style.setProperty('--text-color', 'black');        
        document.documentElement.style.setProperty('--inv-text-color', 'white');        
        document.documentElement.style.setProperty('--body-color', 'white');    
        document.documentElement.style.setProperty('--card-color', '#A3B18A');        
        document.documentElement.style.setProperty('--header-color', '#588157');    
        document.documentElement.style.setProperty('--nav-color', '#3A5A40');                
    }
})
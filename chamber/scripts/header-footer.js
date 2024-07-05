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

        document.documentElement.style.setProperty('--background-color', '#04050a');
        document.documentElement.style.setProperty('--primary-color', '#1b2e2e'); 
        document.documentElement.style.setProperty('--white-text', 'white');        
        document.documentElement.style.setProperty('--grey-blue', '#081924');        
        document.documentElement.style.setProperty('--blue-enough','#1b2e2e'); // change to a darker color
        document.documentElement.style.setProperty('--almost-teal','#478d73');     
        // document.documentElement.style.setProperty('--sea-green', '#0e1b0e');    
        document.documentElement.style.setProperty('--text-color','white');  
        document.documentElement.style.setProperty('--cards-color','#062e24')  
    }

    else{
        document.documentElement.style.setProperty('--background-color', '#32343e');  
        document.documentElement.style.setProperty('--primary-color', 'white');  
        document.documentElement.style.setProperty('--white-text', 'white');       
        document.documentElement.style.setProperty('--grey-blue', '#404c54');        
        document.documentElement.style.setProperty('--blue-enough','#446b6a'); 
        document.documentElement.style.setProperty('--almost-teal','#183228');   
        // document.documentElement.style.setProperty('--sea-green', '#5ba95d');    
        document.documentElement.style.setProperty('--text-color','black');   
        docuent.documentElement.style.setProperty('--cards-color','white');           
    } 
})
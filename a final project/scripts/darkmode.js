// darkMode 
let darkbutton = document.getElementById("dark-mode")
darkbutton.addEventListener("click", () =>{    
    darkbutton.classList.toggle("dark")
    if (darkbutton.classList.contains("dark")){

        document.documentElement.style.setProperty('--elsa', '#EEFFDB');
        document.documentElement.style.setProperty('--cinderella', '#B8D4E3'); 
        document.documentElement.style.setProperty('--aurora', '#F194B4');        
        document.documentElement.style.setProperty('--moana', '#AD343E');        
        document.documentElement.style.setProperty('--mulan','#421820'); 
        document.documentElement.style.setProperty('--who-knows','#283044');     
    }

    else{
        document.documentElement.style.setProperty('--elsa', '#3c2474');
        document.documentElement.style.setProperty('--cinderella', '#2d3c44'); 
        document.documentElement.style.setProperty('--aurora', '#49234e');        
        document.documentElement.style.setProperty('--moana', '#57181e');        
        document.documentElement.style.setProperty('--mulan','#be5a6d'); 
        document.documentElement.style.setProperty('--who-knows','#7d8fbe');              
    } 
})
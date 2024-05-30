let tempspan = document.getElementById("temperature")
let windspan = document.getElementById("windspeed")
let chillspan = document.getElementById("windchill")

function showWindChill(temp, wind){
    if (temp > 50 || wind <=3){
        chillspan.innerText='N/a'
        return
    }

    // 
    
    chillfactor = wind** 0.16  //Why do we use ** not *? 
    chill= 35.74 + (0.6215 * temp) - (35.75* chillfactor) + (0.4275 * temp * chillfactor)
    chillspan.innerHTML = `${chill.toFixed(0)}&deg;F`  

}


showWindChill(parseInt(tempspan.innerText), parseInt(windspan.innerText))





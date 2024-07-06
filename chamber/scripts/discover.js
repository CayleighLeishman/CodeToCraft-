let today = new Date();
const DAYS_IN_MILLIS = 1000*60*60*24;
const LAST_VISIT_KEY = "last-visit"

function getMessage(){
    let lastVisit = localStorage.getItem(LAST_VISIT_KEY)
    let message = "Welcome! Let us know if you have any questions."

    if (lastVisit == null){
        return message
    }

    lastVisit = parseInt(lastVisit)
    let dateDiff = today.getTime() - lastVisit 

    if (dateDiff < DAYS_IN_MILLIS){
         return "Back so soon! Awesome!"
    }
    if (dateDiff > DAYS_IN_MILLIS*2){
         return  "You last visited 1 day ago"
    }
    let daysSinceLastVisit = Math.floor(dateDiff / DAYS_IN_MILLIS)

    return `You last visited ${daysSinceLastVisit } days ago.`   
}

let message = getMessage()
document.getElementById("visit-message").innerText = message
localStorage.setItem(LAST_VISIT_KEY, `${today.getTime()}`)
// In your js file, declare three
// const variables that hold 
//references to the input, button,
// and list elements.

const favchap = document.querySelector('#favchap')
const submitbutton = document.querySelector("#addButton")
const mylist = document.getElementById("list")
const CHAPTER_KEY ="chapters"
let chapterList = GetChapterListFromStorage()

function GetChapterListFromStorage(){
let chapterString = localStorage.getItem(CHAPTER_KEY)
if (chapterString == null){
    return [] 
} 
return JSON.parse(chapterString)

}

function updateLocalStorage(){
    let chapterString = JSON.stringify(chapterList)
    localStorage.setItem(CHAPTER_KEY, chapterString)
}

// Create a click event listener for the
//  Add Chapter button using addEventListener
//  and an anonymous function or arrow function.

function addItem(item){

  // create li element
  let newitem = document.createElement("li")

  // Delete button
  let deletebutton = document.createElement("button")

  //populate the li element textcontent or innerHTML with the input value
  newitem.innerText = favchap.value
  newitem.setAttribute("chatpter", item)

  // populate the button text content with a ❌
  deletebutton.innerText = "❌"

  //append li element with delete button
  newitem.append(deletebutton) 

  //append li element to html
  mylist.append(newitem)

  //remove listen item 
  //created a new list that is better 
  deletebutton.addEventListener("click",()=>{
      let chapter = newitem.getAttribute("Chapter")
      chapterList = chapterList.filter(x => x != chapter)
      updateLocalStorage()
      newitem.remove()
      favchap.focus()
  })
}

addButton.addEventListener("click", () => {

    // don't do anything if nothing is typed in
    if (favchap.value ==""){
        console.log("Nothing was entered")
        favchap.focus();
        return;
    }

   

    // add item from user
    addItem(favchap.value)

    //update the internal list
    chapterList.push(favchap.value)

    //save to local storage
    updateLocalStorage()

    //change input value to nothing or the empty string to clean up the interface for the user
    favchap.value = ""
    
    addItem()

})











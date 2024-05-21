// In your js file, declare three
// const variables that hold 
//references to the input, button,
// and list elements.

const favchap = document.querySelector('#favchap')
const submitbutton = document.querySelector("#addButton")
const mylist = document.getElementById("list")

// Create a click event listener for the
//  Add Chapter button using addEventListener
//  and an anonymous function or arrow function.


addButton.addEventListener("click", () => {

    // don't do anything if nothing is typed in
if (favchap.value ==""){
    console.log("Nothing was entered")
    favchap.focus();
    return;
}
    // create li element
    let newitem = document.createElement("li")

    // Delete button
    let deletebutton = document.createElement("button")

    //populate the li element textcontent or innerHTML with the input value
    newitem.innerText = favchap.value

    // populate the button text content with a ❌
    deletebutton.innerText = "❌"

    //append li element with delete button
    newitem.append(deletebutton) 

    //append li element to html

    mylist.append(newitem)


    //remove listen item 
    deletebutton.addEventListener("click",()=>{
        newitem.remove()
        favchap.focus()
    })

    //change input value to nothing or the empty string to clean up the interface for the user
    favchap.value = ""

})











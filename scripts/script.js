const darkThemeButton = document.querySelector("#darkTheme")
const newNoteButton = document.querySelector("#newNote")
const saveButton = document.querySelector("#save")
const cancelButton = document.querySelector("#cancel")
const textAreaButtons = document.querySelector(".textAreaButtons")
let container = document.querySelector(".container")
let aside = document.querySelector("aside")
let note = document.querySelector("#note")
let titles = document.querySelectorAll(".title")
let navAs = document.querySelectorAll("nav a")
let ulLis = document.querySelectorAll("ul li")

function toggleDarkTheme(){
    container.classList.toggle("blackBG")
    aside.classList.toggle("greyBG")
    note.classList.toggle("greyBG")
    navAs.forEach(navA => {
        navA.classList.toggle("whiteFont")
    });
    titles.forEach(titleElem => {
        titleElem.classList.toggle("whiteFont")
    });
    ulLis.forEach(li => {
        li.classList.toggle("whiteFont")
    })
}
function changeButtonText(){
    darkThemeButton.classList.toggle("goldBG")
    if(darkThemeButton.textContent == "Dark Theme"){
        darkThemeButton.textContent = "Light Theme"
    }
    else{
        darkThemeButton.textContent = "Dark Theme"
    }
}
function handleCancel(){
    textAreaButtons.classList.add("hidden")
    note.classList.add("hidden")
}
function alertUser(){
    noteTitle =prompt("Please enter a title for the note.")
}
function appendNotes(){
    
}
saveButton.addEventListener("click", alertUser)
saveButton.addEventListener("click", appendNotes)
darkThemeButton.addEventListener("click", toggleDarkTheme)
darkThemeButton.addEventListener("click", changeButtonText)
cancelButton.addEventListener("click", handleCancel)

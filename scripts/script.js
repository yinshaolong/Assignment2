const notesArray = [{title:"note one", body:"this is my first note"}, {title:"note two", body:"this is my second note"}]

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

function toggleDarkTheme(){
    let ulLis = document.querySelectorAll("ul li")
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
function handleNew(){
    textAreaButtons.classList.remove("hidden")
    note.classList.remove("hidden")
}
function addToSideBar(newNote){
    let isDarkMode = darkThemeButton.textContent === "Light Theme";
    let newNoteLi = document.createElement("li")
    console.log(newNote)
    newNoteLi.innerText = newNote.title !== "" ? newNote.title : "Untitled"
    document.querySelector("ul").appendChild(newNoteLi)
    console.log(newNoteLi)
    if (isDarkMode){
        newNoteLi.classList.toggle("whiteFont")
    }
    // newNoteLi.addEventListener("click", handleClickNoteTitle)
}
function appendNotes(){
    let noteTitle
    do{
        noteTitle = prompt("Please enter a title for the note.")
    }while(noteTitle === "")

    let body = note.value;
    if (noteTitle !== "" || body !== ""){
        let newNote = {title: noteTitle, body: body}
        notesArray.push(newNote)
        note.value = ""
        addToSideBar(newNote)
    }

}
function handleClickNoteTitle(event){
    let title = event.target.innerText
    let filteredArray = notesArray.filter(note => note.title === title)
    let noteBody = filteredArray[0].body
    note.value = noteBody
}

saveButton.addEventListener("click", appendNotes)
darkThemeButton.addEventListener("click", toggleDarkTheme)
darkThemeButton.addEventListener("click", changeButtonText)
cancelButton.addEventListener("click", handleCancel)
newNoteButton.addEventListener("click", handleNew)
document.querySelector("ul").addEventListener("click", handleClickNoteTitle)
// ulLis.forEach(li => {
//     li.addEventListener("click", handleClickNoteTitle)
// })

const noteInput = document.getElementById("noteInput");

var notesArrey = [];

function addNote() {
    const newNote = noteInput.value;
    if (newNote == "") {
        alert("Please enter valid text");
    }else {
        notesArrey.push(newNote);
        noteInput.value = "";
        console.log(notesArrey);
    }
}

function saveNotes() {
    const notesString = JSON.stringify(notesArrey);
    localStorage.setItem("notes", notesString);
}

function getNotes() {
    const notesString = localStorage.getItem("notes");
    if (notesString == null) {
        console.log("notesString null");
        
    } else {
        notesArrey = JSON.parse(notesString);
    }
}
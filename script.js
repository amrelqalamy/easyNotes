const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notesDiv");
const zeroNotes = document.getElementById("zeroNotes");

var notesArrey = [];

function addNote() {
    const newNote = noteInput.value;
    if (newNote == "") {
        alert("Please enter valid text");
    }else {
        notesArrey.push(newNote);
        noteInput.value = "";
        saveNotes();
        showNotes();
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

function showNotes() {
    
    getNotes();
    
    if (notesArrey.length > 0) {
        zeroNotes.style.display = "none";
    } else {
        zeroNotes.style.display = "block";
    }
    
    notesDiv.innerHTML = "";

for (let index = 0; index < notesArrey.length; index++) {
    const element = notesArrey[index];

    const newDiv = document.createElement("div");

    const newParagraph = document.createElement("p");
    newParagraph.innerText = element;
    newDiv.appendChild(newParagraph);
    
    const deletIcon = document.createElement("i");
    deletIcon.className = "bi bi-trash3";
    deletIcon.onclick = function () {
        
        if (confirm("Are you sure to delete note?") == true) {
            notesArrey.splice(index, 1);
            saveNotes();
            showNotes();
        }
    }
    newDiv.appendChild(deletIcon);

    notesDiv.appendChild(newDiv);

}

}

showNotes()

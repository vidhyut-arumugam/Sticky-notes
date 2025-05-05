const addNoteButton = document.querySelector('.add-note');
const notesContainer = document.querySelector('.notes-container');

addNoteButton.addEventListener('click',()=> addNewNote('Write your note here...'));

function addNewNote(content){

    const note = document.createElement('div');
    note.classList.add('note');
    
}
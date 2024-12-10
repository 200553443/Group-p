const fs = require('fs');
const path = require('path');

// DOM elements
const saveNoteButton = document.getElementById('saveNote');
const noteContent = document.getElementById('noteContent');
const statusMessage = document.getElementById('status');

// Save note event listener
saveNoteButton.addEventListener('click', () => {
    const content = noteContent.value;
    if (content) {
        const filePath = path.join(__dirname, 'notes.txt');

        // Save the content to notes.txt
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                console.error('Failed to save the note:', err);
                statusMessage.textContent = 'Failed to save the note.';
            } else {
                statusMessage.textContent = 'Note saved successfully!';
                noteContent.value = ''; // Clear the text area
            }
        });
    } else {
        statusMessage.textContent = 'Please write a note before saving.';
    }
});
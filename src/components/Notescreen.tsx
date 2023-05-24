import React, { useState, useEffect } from 'react';

type Note = {
  id: number;
  content: string;
};

const Notescreen: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Load the notes from local storage
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);


  // Add a new note to the list
  const addNote = () => {
    if (inputValue.trim() !== '') {
      const newNote: Note = {
        id: Date.now(),
        content: inputValue
      };

      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setInputValue(''); // Reset the input value
    }
  };

  // Clear all notes from the list
  const clearNotes = () => {
    setNotes([]);
    localStorage.removeItem('notes');
  };

  // Delete a note from the list
  const deleteNote = (noteId: number) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };


  return (
    <div>
      <div className='main_container'>
        {notes.map(note => (
          <div key={note.id} className='notes_container'>
          <button  className='cancelbutton' onClick={() => deleteNote(note.id)}>X</button>
          {note.content} 
          </div>
          
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter a note"
        value={inputValue}
        onChange={e =>setInputValue(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>
      <button onClick={clearNotes}>Clear Notes</button>
    </div>
  );
};

export default Notescreen;

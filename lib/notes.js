const fs = require('fs');
const path = require('path');
const notes  = require('../db/db.json');

function createNote(note){
 note.id = notes.length.toString();
 if(validateNote(note)){
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notes , null, 2)
      );
      return true;   
  }
  return false;
}

function findById(id){
  const results = notes.filter(note => note.id == id);

  return results == "1" ? results : null;

}

function getNotes(){
  return notes;
}

function validateNote(note){
  if(!note.title || typeof note.title !== 'string'){
    return false;
  }
  if(!note.message || typeof note.message !== 'string'){
    return false;
  }
  return true;
}

module.exports = {createNote, getNotes, findById}
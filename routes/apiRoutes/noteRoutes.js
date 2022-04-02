const router = require("express").Router();
const {createNote, getNotes, findById } = require('../../lib/notes');



router.get('/notes', (req, res) => {
   
   res.json(getNotes());
 });

 router.get('/notes/:id', (req, res) => {
   const result = findById(req.params.id);
   if(result){
     res.json(result);
   }
   else {
     res.send(404);
   }
 })

 router.post('/notes', (req, res) => {
   

   if(!createNote(req.body)){
     res.status(400).send('This note is not formatted properly');
   } else {
     res.json(note);
   }

 })

 


 module.exports = router;
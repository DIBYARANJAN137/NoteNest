import express from "express"
import { creatANote,getNoteById, deleteANote, getAllNotes, updateANote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/",creatANote);
router.put("/:id",updateANote);
router.delete("/:id",deleteANote)

export default router;



// app.get("/api/notes",(req,res)=>{
//     res.status(200).send("you got 5 notes");
// });

// app.post("api/notes",(req,res)=>{
//     res.status(201).send("Note created successfully");
// });

// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"Note updated successfully"});
// });

// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"Note Deleted successfully"});
// });
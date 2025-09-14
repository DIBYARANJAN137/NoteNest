import Note from "../model/Note.js";

export async function getAllNotes(req,res){
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    }catch(error)
    {
        console.log("Error in getAllNotes controller",error);
        res.status(500).json({"message":"Internal Server Error"})
    }   
};
 

export async function creatANote(req,res){

    try{
        const {title,content}=req.body;
        const note= new Note({title:title,content:content})  //{title,content}
        const savedNotes=await note.save();
        res.status(201).json(savedNotes);
    }catch(error){
        console.log("Error in createANote controller",error);
        res.status(500).json({"message":"Internal Server Error"})

    }
}

export async function updateANote(req,res){
    try{
        const {title,content}=req.body;
        const updatedNote= await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updatedNote) return res.status(404).json({message:"note not found"})
        res.status(200).json({"message":"Note updated successfully"})
    }catch(error){
       console.log("Error in createANote controller",error);
       res.status(500).json({"message":"Internal Server Error"})
    }
}


export async function deleteANote(req,res){
    try{
    const deletedNote= await Note.findByIdAndDelete(req.params.id)
    if(!deletedNote) return res.status(404).json({message:"note not found"})
    res.status(200).json({message:"Note Deleted successfully"});

    }catch(error){
     console.log("Error in createANote controller",error);
       res.status(500).json({"message":"Internal Server Error"})
    }    
}


export async function getNoteById(req,res){
    try{
    const note= await Note.findById (req.params.id)
    if(!note) return res.status(404).json({message:"note not found"})
    res.status(200).json(note);

    }catch(error){
     console.log("Error in createANote controller",error);
       res.status(500).json({"message":"Internal Server Error"})
    }    
}
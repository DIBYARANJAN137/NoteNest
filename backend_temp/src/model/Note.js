import mongoose from "mongoose";

// step-1:I need to create a schema
// step-2: I need to createa model based off that schema



// step-1
const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
},
{timestamps:true}  //createdAt    , updatedAt
);

// step-2
const Note = mongoose.model("Note",noteSchema);

export default Note;
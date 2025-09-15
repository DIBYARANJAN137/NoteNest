export function getAllNotes(req,res){
    res.status(200).json({"message":"You just fetched notes"});
};


export function creatANote(req,res){
    res.status(201).json({"message":"Note created successfully"});
}

export function updateANote(req,res){
res.status(200).json({message:"Note updated successfully"});
}


export function deleteANote(req,res){
    res.status(200).json({message:"Note Deleted successfully"});
}
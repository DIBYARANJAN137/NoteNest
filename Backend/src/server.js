import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();




const app= express();

app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes",notesRoutes);

// What is an Endpoint?
// An endpoint is a combination of a URL + HTTP method 
// that lets the client interact with a specific resources.



const port =process.env.PORT || 5001

connectDb().then(()=>{
    app.listen(port,()=>{
    console.log("App is listening to the port:",port);
});
})



//mongodb+srv://dibyaranjann137_db_user:uKXMtll0nNjTWmxC@cluster0.xw6td6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose, { model,Schema} from 'mongoose';
dotenv.config();

import Note from './models/notes.js';


const app = express();
app.use(cors());
app.use(express.json());

const contentDB = async ()=>{
await mongoose.connect(process.env.MONGODB_URL)
    console.log("Connect the MogoDB")
}
contentDB();

const PORT = process.env.PORT || 5000;

app.get("/health",(req,res)=>{
    res.json({
        success : true,
        message : "Server is running",
        data : null
    })
})

app.post("/notes", async (req,res)=>{
    const {title,content,category} = req.body;

    if(!title){
        return res.json({
            success : false,
            message : "Titile Is Required",
            data : null
        })
    }
    if(!content){
        return res.json({
            success : false,
            message : "Content Is Required",
            data : null
        })
    }
    if(!category){
        return res.json({
            success : false,
            message : "Category Is Required",
            data : null
        })
    }

  const newNote =  await Note.create({
        "title" : title,
        "content" : content,
        "category" : category
    })
    

    res.json({
        success : true,
        message : "Notes added Succcessfullly",
        data : newNote
    })
})

app.get("/notes",async (req,res)=>{

    const notes = await Note.find();

        res.json({
        success : true,
        message : "Notes Fetched Succcessfullly",
        data : notes
        })
})
 app.get("/notes/:id", async (req,res)=>{
    const {id} = req.params;

const note = await Note.findOne({
    _id : id 
})
res.json({
    success : true,
    message : "Notes Fetched Succcessfullly",
    data : note
 }) 
 })

 app.put("/notes/:id",async (req,res)=>{
    const {id} = req.params;
    
    const {title,connect,category} = req.body;

    await Note.updateOne({_id:id},{
        $set: {
            title : title,
            content : connect,
            category : category
        }})
        res.json({
            success : true,
            message : "Notes Updataed Succcessfullly",
            data : null
         })   
 })

 app.delete("/notes/:id",async (req,res)=>{
    const {id} = req.params;
    
    await Note.deleteOne({_id:id})

    res.json({
        success : true,
        message : "Notes Deleted Succcessfullly",
        data : null
     })   
 })
 

app.listen(PORT,()=>{
    console.log(`Serve reunning  on port ${PORT}`)
});
const express = require("express");
const multer = require("multer");
const path = require("path");

const app=express();
const PORT=8000;

app.get("/",(req,res)=>{
    res.send("hello word!");
});

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+ "-" +Date.now()
    +path.extname(file.originalname));
    },
});

const upload = multer({storage});
 app.post("/upload",upload.single("file"),(req,res)=>{
    if(req.file.mimetype!=="application/javascript")
    {
        return res.status(400).send("Only.js!");
    }
    res.json({
        message:"file uploaded successfully!",
        file:req.file,
    });
    res.send("file uploaded successfully!");
 });

 app.post("/uploads",upload.array("files",5),(req,res)=>{
    if(!req.files || req.files.length===0){
        return res.status(400).send("No files uploaded");
    }
    res.json({
        message:"file uploaded successfully!",
        files:req.files,
    });
 });
 app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}/`);
 });
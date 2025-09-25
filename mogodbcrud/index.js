const express=require("express")
const mongoose=require("mongoose")
const songRoute=require("./songRoute")
const app=express();
const PORT=80;
app.use(express.json());


mongoose.connect("mongodb+srv://kartik:kartik@cluster0.5gdfgyo.mongodb.net/mydbsong",{

}
);
app.use("/Song",songRoute);
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}/`);
});
import express from"express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';



const app = express();
const port = 3000;

app.use(express.static("public"))
app.use( bodyParser.json() );  
app.use(bodyParser.urlencoded({ extended: true }));

let blogPosts=[];

function displayBlogs() {
  
$("main").append(



);
  
}

function submitContent() {
  const content = document.getElementById('editor').innerHTML;
  blogPosts.push(content); 
  displayBlogs();
}

app.get("/submit",(req,res,next)=>{
 res.redirect("/");
 submitContent();
})
app.get ("/", (req,res)=>{
    res.render("index.ejs", { title: null, content:null });
})

app.get ("/contact", (req,res)=>{
    res.render("contact.ejs");
})


app.get("/create", (req, res) => {
    res.render("create.ejs");
  });

app.post("/submit",(req,res)=>{

})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
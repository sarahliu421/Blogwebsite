import express from"express";
import bodyParser from "body-parser";




const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));



let blogs=[];

app.get ("/", (req,res)=>{
    res.render("index.ejs",{blogs: blogs.title});
})

app.get ("/contact", (req,res)=>{
    res.render("contact.ejs");
})


app.get("/create", (req, res) => {
    res.render("create.ejs");
  });


app.post("/submit",(req,res)=>{
  const title=req.body["title"];
  const id= title;
  const content= req.body["content"]
  blogs.push({id,title, content});
  res.redirect("/");
})

app.get("/blog/:id",(req,res)=>{
  res.render("post.ejs");

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
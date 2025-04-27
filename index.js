import express from"express";
import bodyParser from "body-parser";




const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));



let blogs=[];

app.get ("/", (req,res)=>{
    res.render("index.ejs",{blogs: blogs, });
})

app.get ("/contact", (req,res)=>{
    res.render("contact.ejs");
})


app.get("/create", (req, res) => {
    res.render("create.ejs");
  });


app.post("/submit",(req,res)=>{
  const title=req.body["title"];
  const id= Date.now().toString();;
  const content= req.body["content"]
  blogs.push({id,title, content});
  res.redirect("/");
})

app.get("/blog/:id",(req,res)=>{
  const blogId = req.params.id;
  const certainBlog=blogs.find((element) => element.id===blogId);

  console.log("Blog ID:", req.params.id);
  console.log("Found blog:", certainBlog);
  if(certainBlog){
    res.render("blog.ejs",{blog:certainBlog});
  }
  else{
    res.status(404).send("Blog not found")
  }

})



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
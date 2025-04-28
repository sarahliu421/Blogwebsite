import express from"express";
import bodyParser from "body-parser";


let blogs=[];

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));





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

app.post("/delete/",(req,res)=>{
const blogId= req.body["id"];
console.log("before deletion",blogs)
blogs= blogs.filter((element)=>element.id !== blogId);//const blogsJavaScript 会认为：左边的 const blogs 是你在函数作用域中新声明一个局部变量；但是右边你又想用 blogs，而这个变量还没“初始化”；所以解释器会报错：
console.log("after deletion",blogs)
res.redirect("/");
//if(afterDelete){
  //res.render("index.ejs",{blogs:afterDelete});
//} 不懂为什么就不行

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
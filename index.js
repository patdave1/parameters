const express = require('express');
const postsRouter = require("./routes/posts.route")

const app = express();


app.get("/" ,(req,res) =>{
    res
    .status(200)
    .send("welcome to my server .please use / users to get all users")
})


app.use('/posts',postsRouter);

app.listen(4000 ,(err)=>{
    console.log(" Server listening on http://localhost:4000");
});
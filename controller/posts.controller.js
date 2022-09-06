const getPosts= (req,res)=>{
    res.status(200).send(`Get All posts filtered by "${req.query.title}"`);

}
const getPost= (req,res)=>{
    res.status(200).send(`post with Id "${req. params.postId}" has been retrieved`)

}
const createPosts= (req,res)=>{
    res.status(200).send(" post created")

}
const updatePosts= (req,res)=>{
    res.status(200).send(`post with ID "${req.params.postId}" has been updated successully`)

}
const deletePosts= (req,res)=>{
    res.status(200).send("post deleted")

};

module.exports={
getPosts,
getPost,
createPosts,
updatePosts,
deletePosts
}


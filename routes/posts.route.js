const router = require("express").Router;
const {
  getPost,
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
} = require("../controller/posts.controller");

const postRouter = router();

postRouter.route("/").get(getPosts).post(createPosts);
postRouter.route("/:postId").patch(updatePosts).delete(deletePosts).get(getPost);

module.exports = postRouter;
const PostController = require('../controllers/take-care-post.controller');
const router = require('express').Router()

router.get("/getAll", PostController.getAllPosts);
router.get("/getById/:id", PostController.getPostById);
router.post("/create", PostController.createPost);
router.put("/update/:id", PostController.updatePost);
router.delete("/delete/:id", PostController.deletePost);


module.exports = router;
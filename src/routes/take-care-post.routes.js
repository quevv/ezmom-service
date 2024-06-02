const postController = require('../controllers/take-care-post.controller');
const router = require('express').Router()

router.get("/getAll", postController.getAllPosts);
router.get("/getById/:id", postController.getPostById);
router.post("/create", postController.createPost);
router.put("/update/:id", postController.updatePost);
router.delete("/delete/:id", postController.deletePost);


module.exports = router;
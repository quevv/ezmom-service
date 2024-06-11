const postController = require('../controllers/take-care-post.controller');
const AccountRoles = require('../enum/roles');
const { authorize } = require('../middlewares/authMiddleware');
const router = require('express').Router()

router.get("/getAll", postController.getAllPosts);
router.get("/getById/:id", postController.getPostById);
router.post("/create", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), postController.createPost);
router.put("/update/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), postController.updatePost);
router.delete("/delete/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), postController.deletePost);


module.exports = router;
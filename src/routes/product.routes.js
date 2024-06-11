const ProductController = require('../controllers/product.controller');
const AccountRoles = require('../enum/roles');
const { authorize } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.get("/getAllProducts", ProductController.getAllProducts);
router.get("/getProductById/:id", ProductController.getProductById);
router.get("/getProductsByBrand/:id", ProductController.getProductsByBrand);
router.post("/createProduct", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), ProductController.createProduct);
router.put("/updateProduct/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), ProductController.updateProduct);
router.delete("/deleteProduct/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), ProductController.deleteProduct);


module.exports = router;
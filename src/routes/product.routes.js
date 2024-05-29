const ProductController = require('../controllers/product.controller');
const router = require('express').Router()

router.get("/getAllProducts", ProductController.getAllProducts);
router.get("/getProductById/:id", ProductController.getProductById);
router.get("/getProductsByBrand/:id", ProductController.getProductsByBrand);
router.post("/createProduct", ProductController.createProduct);
router.put("/updateProduct/:id", ProductController.updateProduct);
router.delete("/deleteProduct/:id", ProductController.deleteProduct);


module.exports = router;
const OrderVoucherController = require('../controllers/order-voucher.controller');
const router = require('express').Router();

router.get("/getAll", OrderVoucherController.getAllOrderVoucher);
router.get("/getByOrderId/:orderId", OrderVoucherController.getVoucherByOrder);
router.post("/create", OrderVoucherController.createOrderVoucher);
// router.put("/update/:id", OrderVoucherController.updateUserVoucher);
// router.delete("/delete/:id", OrderVoucherController.deleteUserVoucher);

module.exports = router;
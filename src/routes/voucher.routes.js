const VoucherController = require('../controllers/voucher.controller');
const router = require('express').Router();

router.get("/getAll", VoucherController.getAllVouchers);
router.get("/getById/:id", VoucherController.getVoucherById);
router.post("/create", VoucherController.createVoucher);
router.put("/update/:id", VoucherController.updateVoucher);
router.delete("/delete/:id", VoucherController.deteleVoucher);


module.exports = router;
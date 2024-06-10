const UserVoucherController = require('../controllers/user-voucher.controller');
const router = require('express').Router();

router.get("/getAll", UserVoucherController.getAllUserVouchers);
router.get("/getByUserId/:userId", UserVoucherController.getVouchersbyUserId);
router.post("/create", UserVoucherController.createUserVoucher);
router.put("/update/:id", UserVoucherController.updateUserVoucher);
router.delete("/delete/:id", UserVoucherController.deleteUserVoucher);

module.exports = router;
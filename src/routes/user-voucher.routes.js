const UserVoucherController = require('../controllers/user-voucher.controller');
const AccountRoles = require('../enum/roles');
const { authorize } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.get("/getAll", UserVoucherController.getAllUserVouchers);
router.get("/getByUserId/:userId", authorize(AccountRoles.CUSTOMER), UserVoucherController.getVouchersbyUserId);
router.post("/create", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), UserVoucherController.createUserVoucher);
router.put("/update/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), UserVoucherController.updateUserVoucher);
router.delete("/delete/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), UserVoucherController.deleteUserVoucher);

module.exports = router;
const VoucherController = require('../controllers/voucher.controller');
const AccountRoles = require('../enum/roles');
const { authorize } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.get("/getAll", VoucherController.getAllVouchers);
router.get("/getById/:id", VoucherController.getVoucherById);
router.post("/create", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), VoucherController.createVoucher);
router.put("/update/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), VoucherController.updateVoucher);
router.delete("/delete/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), VoucherController.deteleVoucher);


module.exports = router;
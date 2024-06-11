const router = require('express').Router();
const OrderController = require('../controllers/order.controller');
const AccountRoles = require('../enum/roles');
const { authorize } = require('../middlewares/authMiddleware');

router.get('/getAll', authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), OrderController.getAllOrders);
router.get('/getById/:id', authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE, AccountRoles.CUSTOMER), OrderController.getOrderById);
router.post('/create', authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), OrderController.createOrder);
router.put('/update/:id', authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE, AccountRoles.CUSTOMER), OrderController.updateOrder);
router.delete('/delete/:id', authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), OrderController.deleteOrder);

module.exports = router;
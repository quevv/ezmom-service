const OrderStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED',
    CANCELLED: 'CANCELLED',
    ARCHIVED: 'ARCHIVED'
};

const PaymentType = {
    VN_PAY: 'VNPay',
    MOMO: 'Momo',
    CASH: 'Cash'
};

module.exports = {
    OrderStatus,
    PaymentType
};

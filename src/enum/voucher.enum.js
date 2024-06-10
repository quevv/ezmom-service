const VoucherTypes = {
    // This type of voucher provides a discount that is a percentage of the total bill.
    PERCENTAGE: 'PERCENTAGE',

    // Provides a fixed amount of discount on the total bill.
    FIXED_AMOUNT: 'FIXED_AMOUNT',

    // Allows you to get another item for free or at a discount when you purchase one item.
    BUY_ONE_GET_ONE: 'BUY_ONE_GET_ONE',

    // Eliminates the shipping cost for the order.
    FREE_SHIPPING: 'FREE_SHIPPING',

    // Typically offered to repeat customers as part of a loyalty program, providing them with special discounts or benefits.
    LOYALTY: 'LOYALTY'
}

const VoucherStatus = {
    ACTIVE: "active",
    INACTIVE: "inactive",
    EXPIRED: 'expired'
}

const UserVoucherStatus = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    EXPIRED: 'EXPIRED',
    REDEEMED: 'REDEEMED'
}


module.exports = { VoucherTypes, VoucherStatus, UserVoucherStatus };
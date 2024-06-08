const VoucherTypes = {
    // This type of voucher provides a discount that is a percentage of the total bill.
    PERCENTAGE: 'percentage',

    // Provides a fixed amount of discount on the total bill.
    FIXED_AMOUNT: 'Fixed amount',

    // Allows you to get another item for free or at a discount when you purchase one item.
    BUY_ONE_GET_ONE: 'Buy one get one',

    // Eliminates the shipping cost for the order.
    FREE_SHIPPING: 'free ship',

    // Typically offered to repeat customers as part of a loyalty program, providing them with special discounts or benefits.
    LOYALTY: 'loyalty'
}

const VoucherStatus = {
    ACTIVE: "active",
    INACTIVE: "inactive",
    EXPIRED: 'expired'
}

module.exports = { VoucherTypes, VoucherStatus };
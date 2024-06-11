const Product = require('./product.model');
const sequelize = require('../config/database');
const Account = require('./account.model');
const Order = require('./order.model');
const OrderDetails = require('./order-details.model');
const Brand = require('./brand.model');
const Milestone = require('./milestone.model');
const RecommendedProduct = require('./recommended-product.model');
const BabyGrowthPath = require('./baby-growth-path.model');
const Baby = require('./baby.model');
const GrowthPath = require('./growth-path.model');
const GrowthPathPost = require('./growth-path-post.model');
const TakeCarePost = require('./take-care-post.model');
const Voucher = require('./voucher.model');
const UserVoucher = require('./user-voucher.model');
const OrderVoucher = require('./order-voucher.model');

// Define relationships
Account.hasMany(Order, { foreignKey: 'account_id' });
Order.belongsTo(Account, { foreignKey: 'account_id' });

Order.hasMany(OrderDetails, { foreignKey: 'order_id' });
OrderDetails.belongsTo(Order, { foreignKey: 'order_id' });

Product.belongsTo(Brand, { foreignKey: 'brandId' });
Product.hasMany(OrderDetails, { foreignKey: 'product_id' });
OrderDetails.belongsTo(Product, { foreignKey: 'product_id' });

GrowthPath.belongsToMany(Baby, {
    through: BabyGrowthPath,
    foreignKey: 'growthPathId',
    otherKey: 'babyId'
});
Baby.belongsToMany(GrowthPath, {
    through: BabyGrowthPath,
    foreignKey: 'babyId',
    otherKey: 'growthPathId'
});
Baby.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });

GrowthPath.belongsToMany(TakeCarePost, {
    through: GrowthPathPost,
    foreignKey: 'growthPathId',
    otherKey: 'postId'
});
TakeCarePost.belongsToMany(GrowthPath, {
    through: GrowthPathPost,
    foreignKey: 'postId',
    otherKey: 'growthPathId'
});

RecommendedProduct.belongsTo(Product, {
    foreignKey: 'productId',
    as: "product"
});
Product.belongsToMany(Milestone, {
    through: RecommendedProduct,
    foreignKey: 'productId',
    otherKey: 'milestoneId'
});

RecommendedProduct.belongsTo(Milestone, {
    foreignKey: 'milestoneId',
    as: "milestone"
});
Milestone.belongsToMany(Product, {
    through: RecommendedProduct,
    foreignKey: 'milestoneId',
    otherKey: 'productId'
});

// User Voucher
Account.belongsToMany(Voucher, {
    through: UserVoucher,
    foreignKey: 'userId',
    otherKey: 'voucherId',
});
UserVoucher.belongsTo(Account, {
    foreignKey: 'userId',
    as: 'account'
});

Voucher.belongsToMany(Account, {
    through: UserVoucher,
    foreignKey: 'voucherId',
    otherKey: 'userId',
});
UserVoucher.belongsTo(Voucher, {
    foreignKey: 'voucherId',
    as: 'voucher'
});

// Order Voucher
Order.belongsToMany(Voucher, {
    through: OrderVoucher,
    foreignKey: 'orderId',
    otherKey: 'voucherId',
});
OrderVoucher.belongsTo(Order, {
    foreignKey: 'orderId',
    as: 'order'
});

Voucher.belongsToMany(Order, {
    through: OrderVoucher,
    foreignKey: 'voucherId',
    otherKey: 'orderId',
});
OrderVoucher.belongsTo(Voucher, {
    foreignKey: 'voucherId',
    as: 'voucher'
});

module.exports = {
    Account,
    Product,
    Brand,
    Milestone,
    RecommendedProduct,
    Order,
    OrderDetails,
    BabyGrowthPath,
    Baby,
    GrowthPath,
    GrowthPathPost,
    TakeCarePost,
    UserVoucher,
    OrderVoucher,
    sequelize
};
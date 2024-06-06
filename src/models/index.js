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
    sequelize
};
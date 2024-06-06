const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Milestone = require('./milestone.model');
const Product = require('./product.model');

class RecommendedProduct extends Model { }

RecommendedProduct.init({
    recommendedId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'recommended_product_id'
    },
    milestoneId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Milestone',
            key: 'milestoneId',
        },
        field: 'milestone_id'
    },
    productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Product',
            key: 'productId',
        },
        field: 'product_id'
    },
}, {
    sequelize,
    modelName: 'RecommendedProduct',
    tableName: 'recommended_product',
    timestamps: false
});

module.exports = RecommendedProduct;
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const { ProductStatus, ProductTypes } = require('../enum/product.enum');
const Brand = require('./brand.model');

class Product extends Model { }

Product.init({
    productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'product_id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: 'Must be an integer number!'
            },
            min: {
                args: [1],
                msg: 'Must be a positive number!'
            }
        }
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: {
                msg: 'Must be an decimal number!'
            },
            min: {
                args: [0.01],
                msg: 'Must be a positive number!'
            }
        }
    },
    status: {
        type: DataTypes.ENUM(...Object.values(ProductStatus)),
        allowNull: true,
        defaultValue: ProductStatus.DRAFT,
    },
    type: {
        type: DataTypes.ENUM(...Object.values(ProductTypes)),
        allowNull: true,
        defaultValue: ProductTypes.POWDERED_MILK,
    },
    brandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Brand',
            key: 'brandId',
        },
        field: 'brand_id'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }
}, {
    sequelize,
    modelName: 'Product',
    tableName: 'product',
    timestamps: false,
});

module.exports = Product;

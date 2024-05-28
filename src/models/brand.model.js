const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Brand extends Model { }

Brand.init({
    brandId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'brand_id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Brand',
    tableName: 'brand',
    timestamps: false,
});

module.exports = Brand;

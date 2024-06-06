const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const GrowthPath = require('./growth-path.model');
const Baby = require('../models/baby.model');

class BabyGrowthPath extends Model { }

BabyGrowthPath.init({
    babyGrowthPathId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'baby_growth_path_id',
    },
    babyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'baby',
            key: 'baby_id'
        },
        field: 'baby_id',
    },
    growthPathId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'growth_path',
            key: 'growth_path_id'
        },
        field: 'growth_path_id',
    },
}, {
    sequelize,
    modelName: 'BabyGrowthPath',
    tableName: 'baby_growth_path',
    timestamps: false
});

module.exports = BabyGrowthPath;
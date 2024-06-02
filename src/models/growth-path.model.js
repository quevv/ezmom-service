const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class GrowthPath extends Model { }

GrowthPath.init({
    growthPathId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'growth_path_id'
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    minMonth: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: 'Must be an integer number!'
            }
        },
        field: 'min_month',
    },
    maxMonth: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: 'Must be an integer number!'
            }
        },
        field: 'max_month',
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'GrowthPath',
    tableName: 'growth_path',
    timestamps: false,
})

module.exports = GrowthPath;
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Milestone extends Model { }

Milestone.init({
    milestoneId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'milestone_id'
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
}, {
    sequelize,
    modelName: 'Milestone',
    tableName: 'milestone',
    timestamps: false
});

module.exports = Milestone;
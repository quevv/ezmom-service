const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const TakeCarePost = require('./take-care-post.model');
const GrowthPath = require('./growth-path.model');

class GrowthPathPost extends Model { }

GrowthPathPost.init({
    growthPathPostId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'growth_path_post_id'
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'take_care_post',
            key: 'post_id'
        },
        field: 'post_id'
    },
    growthPathId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'growth_path',
            key: 'growth_path_id'
        },
        field: 'growth_path_id'
    }
}, {
    sequelize,
    modelName: 'GrowthPathPost',
    tableName: 'growth_path_post',
    timestamps: false
});

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

module.exports = GrowthPathPost;
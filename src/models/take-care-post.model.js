const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const { tableName } = require('./growth-path.model');
const PostStatus = require('../enum/post.enum');

class TakeCarePost extends Model { }

TakeCarePost.init({
    postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'post_id'
    },
    month: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM(...Object.values(PostStatus)),
        allowNull: false,
        defaultValue: PostStatus.DRAFT
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
    modelName: 'TakeCarePost',
    tableName: 'take_care_post',
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = TakeCarePost;
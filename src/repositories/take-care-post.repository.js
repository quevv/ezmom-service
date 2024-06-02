const PostStatus = require('../enum/post.enum');
const GrowthPath = require('../models/growth-path.model');
const TakeCarePost = require('../models/take-care-post.model');
const GrowthPathPost = require('../models/growth-path-post.model');

class PostRepository {
    static async getAllPosts(params) {
        try {
            const { search, filter, sort, page = 1, pageSize = 10 } = params;

            const whereClause = {};
            if (search) {
                whereClause[Op.or] = [
                    { month: { [Op.iLike]: `%${search}%` } },
                    { post: { [Op.iLike]: `%${search}%` } }
                ];
            }

            if (filter) {
                Object.assign(whereClause, filter);
            }

            const options = {
                where: whereClause,
                order: sort ? [sort] : [['createdAt', 'ASC']],
                offset: (page - 1) * pageSize,
                limit: pageSize,
            };
            const { rows, count } = await TakeCarePost.findAndCountAll(options);
            return { posts: rows, total: count }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getPostById(id) {
        try {
            const post = await TakeCarePost.findByPk(id);
            if (post) return post;
            else throw new Error("Post not found!");
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createPost(postData) {
        try {
            return await TakeCarePost.create(postData);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updatePost(id, updatedData) {
        try {
            const post = await TakeCarePost.findByPk(id);
            if (post) {
                Object.assign(post, updatedData);
                await post.save();
                return await TakeCarePost.findByPk(id);
            }
            else throw new Error("Post not found!");
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deletePost(id) {
        try {
            const post = await TakeCarePost.findByPk(id);
            if (post) {
                if (post.status != PostStatus.PUBLISHED) {
                    return await TakeCarePost.destroy({
                        where: {
                            post_id: id,
                        }
                    });
                }
                else throw new Error("Post is in published status! Please unpublish this post first.");
            }
            else throw new Error("Post not found!");
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = PostRepository;
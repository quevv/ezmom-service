const PostRepository = require('../repositories/take-care-post.repository');

class PostService {
    static async getAllPosts(params) {
        try {
            return await PostRepository.getAllPosts(params);
        } catch (error) {
            throw new Error(`Error fetching posts: ${error.message}`);
        }
    }

    static async getPostById(id) {
        try {
            return await PostRepository.getPostById(id);
        } catch (error) {
            throw new Error(`Error fetching post by id: ${error.message}`);
        }
    }

    static async createPost(postData) {
        try {
            return await PostRepository.createPost(postData);
        } catch (error) {
            throw new Error(`Error creating post: ${error.message}`);
        }
    }

    static async updatePost(id, updatedData) {
        try {
            return await PostRepository.updatePost(id, updatedData);
        } catch (error) {
            throw new Error(`Error updating post: ${error.message}`);
        }
    }

    static async deletePost(id) {
        try {
            return await PostRepository.deletePost(id);
        } catch (error) {
            throw new Error(`Error deleting post: ${error.message}`);
        }
    }
}

module.exports = PostService;
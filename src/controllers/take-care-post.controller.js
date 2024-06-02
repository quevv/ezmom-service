const PostService = require('../services/take-care-post.service');

const getAllPosts = async (req, res) => {
    try {
        const { search, filter, sort, page, pageSize } = req.query;
        const params = {
            search: search || undefined,
            filter: filter ? JSON.parse(filter) : undefined,
            sort: sort ? JSON.parse(sort) : undefined,
            page: page ? parseInt(page, 10) : 1,
            pageSize: pageSize ? parseInt(pageSize, 10) : 10,
        };
        const { posts, total } = await PostService.getAllPosts(params);
        res.status(200).json({ msg: "Fetching posts success!", posts, total })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await PostService.getPostById(id);
        res.status(200).json({ msg: "Fetching post success!", post })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createPost = async (req, res) => {
    try {
        const postData = req.body;
        const result = await PostService.createPost(postData);
        res.status(200).json({ msg: "Creating post success!", result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const result = await PostService.updatePost(id, updatedData);
        res.status(200).json({ msg: "Updating post success!", result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await PostService.deletePost(id);
        res.status(200).json({ msg: "Deleting post success!", result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}
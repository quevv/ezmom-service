const ProductService = require('../services/product.service');

const getAllProducts = async (req, res) => {
    try {
        const { search, filter, sort, page, pageSize } = req.query;
        const params = {
            search: search || undefined,
            filter: filter ? JSON.parse(filter) : undefined,
            sort: sort ? JSON.parse(sort) : undefined,
            page: page ? parseInt(page, 10) : 1,
            pageSize: pageSize ? parseInt(pageSize, 10) : 10,
        };

        const { products, total } = await ProductService.getAllProducts(params);

        res.status(200).json({ products, total, page: params.page, pageSize: params.pageSize });
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await ProductService.getProductById(id);
        console.log(typeof (products.price));
        res.status(200).json(products);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, description, img, stock, price, status, type, brandId } = req.body;
        if (!name || !stock || !price || !brandId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const formattedPrice = parseFloat(price);
        const formattedStock = parseInt(stock);
        if (isNaN(formattedStock) || isNaN(formattedPrice)) {
            return res.status(400).json({ error: 'Invalid stock or price format' });
        }
        const productData = {
            name,
            description,
            img,
            stock: formattedStock,
            price: formattedPrice,
            status,
            type,
            brandId,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await ProductService.createProduct(productData);

        res.status(200).json({ msg: "Create new product success", result });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const updatedData = req.body;

        const existingProduct = await ProductService.getProductById(id);

        const updatedProductData = { ...existingProduct, ...updatedData };

        const result = await ProductService.updateProduct(id, updatedProductData);
        res.status(200).json({
            msg: "Update product success!",
            result: result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductService.deleteProduct(id);
        if (result === 1)
            res.status(200).json({ msg: "Delete product success" });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}
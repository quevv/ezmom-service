const BrandService = require('../services/brand.service')

const getAllBrands = async (req, res) => {
    try {
        const { search, filter, sort, page, pageSize } = req.query;
        const params = {
            search: search || undefined,
            filter: filter ? JSON.parse(filter) : undefined,
            sort: sort ? JSON.parse(sort) : undefined,
            page: page ? parseInt(page, 10) : 1,
            pageSize: pageSize ? parseInt(pageSize, 10) : 10,
        };

        const { brands, total } = await BrandService.getAllBrands(params);

        res.status(200).json({ brands, total, page: params.page, pageSize: params.pageSize });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBrandById = async (req, res) => {
    const { id } = req.params;
    try {
        const brand = await BrandService.getBrandbyId(id);
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBrand = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const brand = await BrandService.updateBrand(id, updateData);
        res.status(200).json({
            msg: "Update brand success!",
            result: brand
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createBrand = async (req, res) => {
    const brand = req.body;
    try {
        const result = await BrandService.createBrand(brand);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteBrand = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await BrandService.deleteBrand(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllBrands, getBrandById, createBrand, deleteBrand, updateBrand };
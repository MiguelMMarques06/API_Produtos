// filepath: product-api/product-api/src/services/productService.js
const ProductModel = require('../models/productModel');

// Função para criar um novo produto
const createProduct = async (productData) => {
    // Valida se os dados do produto estão corretos
    if (!productData.name || !productData.price) {
        throw new Error('Nome e preço são obrigatórios');
    }

    // Cria um novo produto no banco de dados
    const newProduct = new ProductModel(productData);
    await newProduct.save();
    return newProduct;
};

// Função para atualizar um produto existente
const updateProduct = async (productId, productData) => {
    // Valida se o ID do produto é fornecido
    if (!productId) {
        throw new Error('ID do produto é obrigatório');
    }

    // Atualiza o produto no banco de dados
    const updatedProduct = await ProductModel.findByIdAndUpdate(productId, productData, { new: true });
    if (!updatedProduct) {
        throw new Error('Produto não encontrado');
    }
    return updatedProduct;
};

// Função para deletar um produto
const deleteProduct = async (productId) => {
    // Valida se o ID do produto é fornecido
    if (!productId) {
        throw new Error('ID do produto é obrigatório');
    }

    // Deleta o produto do banco de dados
    const deletedProduct = await ProductModel.findByIdAndDelete(productId);
    if (!deletedProduct) {
        throw new Error('Produto não encontrado');
    }
    return deletedProduct;
};

// Função para listar todos os produtos
const getProducts = async () => {
    // Busca todos os produtos no banco de dados
    const products = await ProductModel.find();
    return products;
};

// Exporta as funções do serviço de produtos
module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
};
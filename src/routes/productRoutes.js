import express from 'express';
import ProductController from '../controllers/productController.js';
import { validateCreateProduct, validateUpdateProduct } from '../middlewares/validationMiddleware.js';

const router = express.Router();

// Rota para criar um novo produto
router.post('/', validateCreateProduct, ProductController.createProduct);

// Rota para atualizar um produto existente
router.put('/:id', validateUpdateProduct, ProductController.updateProduct);

// Rota para deletar um produto
router.delete('/:id', ProductController.deleteProduct);

// Rota para listar todos os produtos
router.get('/', ProductController.getProducts);

// Exporta as rotas para serem usadas no app
export default router;
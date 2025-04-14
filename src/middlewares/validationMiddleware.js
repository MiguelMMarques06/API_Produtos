import { body, validationResult } from 'express-validator';

// Middleware para validação de dados de entrada ao criar um produto
export const validateCreateProduct = [
    body('name')
        .isString()
        .withMessage('O nome deve ser uma string.')
        .notEmpty()
        .withMessage('O nome é obrigatório.'),
    body('price')
        .isFloat({ gt: 0 })
        .withMessage('O preço deve ser um número maior que zero.'),
    body('description')
        .optional()
        .isString()
        .withMessage('A descrição deve ser uma string.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware para validação de dados de entrada ao atualizar um produto
export const validateUpdateProduct = [
    body('name')
        .optional()
        .isString()
        .withMessage('O nome deve ser uma string.'),
    body('price')
        .optional()
        .isFloat({ gt: 0 })
        .withMessage('O preço deve ser um número maior que zero.'),
    body('description')
        .optional()
        .isString()
        .withMessage('A descrição deve ser uma string.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
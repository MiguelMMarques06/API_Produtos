// src/routes/productRoutes.js
import express from 'express';
import productRoutes from './routes/productRoutes.js';

const app = express();
const PORT = 3000;
// Exemplo de rota

app.use(express.json());

app.use('/products', productRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});